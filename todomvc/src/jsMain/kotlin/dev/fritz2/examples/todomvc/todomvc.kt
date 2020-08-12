package dev.fritz2.examples.todomvc

import dev.fritz2.binding.*
import dev.fritz2.dom.append
import dev.fritz2.dom.html.HtmlElements
import dev.fritz2.dom.html.Keys
import dev.fritz2.dom.html.render
import dev.fritz2.dom.key
import dev.fritz2.dom.states
import dev.fritz2.dom.values
import dev.fritz2.repositories.Resource
import dev.fritz2.repositories.localstorage.localStorageEntity
import dev.fritz2.repositories.localstorage.localStorageQuery
import dev.fritz2.routing.router
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.*

data class Filter(val text: String, val function: (List<ToDo>) -> List<ToDo>)

val filters = mapOf(
    "/" to Filter("All") { it },
    "/active" to Filter("Active") { toDos -> toDos.filter { !it.completed } },
    "/completed" to Filter("Completed") { toDos -> toDos.filter { it.completed } }
)

val persistencePrefix = "todos-"

val toDoResource = Resource(ToDo::id, ToDoSerializer, ToDo(text = ""))

@ExperimentalCoroutinesApi
@FlowPreview
fun main() {
    val router = router("/")

    val toDos = object : RootStore<List<ToDo>>(emptyList()) {

        val localStorageEntity = localStorageEntity(toDoResource, "todos-")
        val localStorageQuery = localStorageQuery<ToDo, String, Unit>(toDoResource, "todos-")

        val add = handle<String> { toDos, text ->
            if (text.isNotEmpty())
                toDos + localStorageEntity.saveOrUpdate(ToDo(text = text))
            else toDos
        }

        val remove = handle<String> { toDos, id ->
            localStorageQuery.delete(toDos, id)
        }

        val toggleAll = handle<Boolean> { toDos, toggle ->
            toDos.map { it.copy(completed = toggle) }
        }

        val clearCompleted = handle { toDos ->
            toDos.filterNot { it.completed }
        }

        val count = data.map { todos -> todos.count { !it.completed } }.distinctUntilChanged()
        val allChecked = data.map { todos -> todos.isNotEmpty() && todos.all { it.completed } }.distinctUntilChanged()
    }

    val inputHeader = render {
        header {
            h1 { text("todos") }
            input("new-todo") {
                placeholder = const("What needs to be done?")

                changes.values().map { domNode.value = ""; it.trim() } handledBy toDos.add
            }
        }
    }

    val mainSection = render {
        section("main") {
            input("toggle-all", id = "toggle-all") {
                type = const("checkbox")
                checked = toDos.allChecked

                changes.states() handledBy toDos.toggleAll
            }
            label(`for` = "toggle-all") {
                text("Mark all as complete")
            }
            ul("todo-list") {
                toDos.data.flatMapLatest { all ->
                    router.map { route ->
                        filters[route]?.function?.invoke(all) ?: all
                    }
                }.each(ToDo::id).render { toDo ->
                    val toDoStore = toDos.sub(toDo, ToDo::id)
                    val textStore = toDoStore.sub(L.ToDo.text)
                    val completedStore = toDoStore.sub(L.ToDo.completed)
                    val editingStore = storeOf(false)

                    li {
                        attr("data-id", toDoStore.id)
                        //TODO: better flatmap over editing and completed
                        classMap = toDoStore.data.combine(editingStore.data) { toDo, isEditing ->
                            mapOf(
                                "completed" to toDo.completed,
                                "editing" to isEditing
                            )
                        }
                        div("view") {
                            input("toggle") {
                                type = const("checkbox")
                                checked = completedStore.data

                                changes.states() handledBy completedStore.update
                            }
                            label {
                                textStore.data.bind()

                                dblclicks.map { true } handledBy editingStore.update
                            }
                            button("destroy") {
                                clicks.events.map { toDo.id } handledBy toDos.remove
                            }
                        }
                        input("edit") {
                            value = textStore.data
                            changes.values() handledBy textStore.update

                            editingStore.data.map { isEditing ->
                                if (isEditing) domNode.apply {
                                    focus()
                                    select()
                                }
                                isEditing.toString()
                            }.watch()
                            merge(
                                blurs.map { false },
                                keyups.key().filter { it.isKey(Keys.Enter) }.map { false }
                            ) handledBy editingStore.update
                        }
                    }
                }.bind()
            }
        }
    }

    fun HtmlElements.filter(text: String, route: String) {
        li {
            a {
                className = router.map { if (it == route) "selected" else "" }
                href = const("#$route")
                text(text)
            }
        }
    }

    val appFooter = render {
        footer("footer") {
            className = toDos.count.map {
                if (it == 0) "hidden"
                else ""
            }

            span("todo-count") {
                strong {
                    toDos.count.map {
                        "$it item${if (it != 1) "s" else ""} left"
                    }.bind()
                }
            }

            ul("filters") {
                filters.forEach { filter(it.value.text, it.key) }
            }
            button("clear-completed") {
                text("Clear completed")

                clicks handledBy toDos.clearCompleted
            }
        }
    }

    append("todoapp", inputHeader, mainSection, appFooter)
}