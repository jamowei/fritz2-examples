package dev.fritz2.examples.repositories

import dev.fritz2.binding.*
import dev.fritz2.dom.html.HtmlElements
import dev.fritz2.dom.html.Input
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.dom.values
import dev.fritz2.history.history
import dev.fritz2.identification.uniqueId
import dev.fritz2.lenses.format
import dev.fritz2.repositories.Resource
import dev.fritz2.repositories.localstorage.localStorageEntity
import dev.fritz2.repositories.localstorage.localStorageQuery
import dev.fritz2.tracking.tracker
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.*

val numberFormat = format({ it.toInt() }, { it.toString() })

val personResource = Resource(
    Person::_id,
    PersonSerializer,
    Person()
)

const val personPrefix = "dev.fritz2.examples.person"

@ExperimentalCoroutinesApi
object EntityStore : RootStore<Person>(personResource.emptyEntity) {

    val running = tracker()
    val history = history<Person>(10).sync(this)

    private val localStorage = localStorageEntity(personResource, personPrefix)

    val load = handle<String> { person, id ->
        history.reset()
        localStorage.load(person, id)
    }

    val saveOrUpdate = handleAndOffer<Unit> { person ->
        running.track("myTransaction") {
            delay(1500)
            val personWithId =
                if (person._id == personResource.emptyEntity._id) person.copy(_id = uniqueId()) else person
            localStorage.saveOrUpdate(personWithId).also { offer(Unit) }
        }
    }

    val delete = handleAndOffer<Unit> { person ->
        history.reset()
        localStorage.delete(person).also { offer(Unit) }
    }

    val reset = handle {
        history.reset()
        personResource.emptyEntity
    }

    val trigger = merge(saveOrUpdate, delete)

    val undo = handle {
        history.back()
    }

    val isSaved = data.map { it._id != personResource.emptyEntity._id }
}

@ExperimentalStdlibApi
@ExperimentalCoroutinesApi
object QueryStore : RootStore<List<Person>>(emptyList()) {
    private val localStorage =
        localStorageQuery<Person, String, Unit>(personResource, personPrefix)

    val query = handle(execute = localStorage::query)
    val delete = handle<String>(execute = localStorage::delete)

    init {
        action() handledBy query
    }
}


/*
 * List-View
 */
@ExperimentalCoroutinesApi
@ExperimentalStdlibApi
fun HtmlElements.table() {
    div("col-12") {
        div("card") {
            h5("card-header") { +"List of Persons" }
            div("card-body") {
                table("table table-striped") {
                    thead("thead-dark") {
                        tr {
                            th { +"#" }
                            th { +"name" }
                            th { +"age" }
                            th { +"salary" }
                            th { +"" }
                        }
                    }
                    tbody {
                        QueryStore.data.each().render { p ->
                            tr {
                                td { +"...${p._id.takeLast(5)}" }
                                td { +p.name }
                                td { +p.age.toString() }
                                td { +p.salary.toString() }
                                td {
                                    button("btn btn-primary") {
                                        +"Edit"
                                        clicks.map { p._id } handledBy EntityStore.load
                                    }
                                    button("btn btn-danger ml-2") {
                                        className = EntityStore.data.map { if (it._id == p._id) "d-none" else "" }
                                        +"Delete"
                                        clicks.map { p._id } handledBy QueryStore.delete
                                    }
                                }
                            }
                        }.bind()
                    }
                }
            }
        }
    }
}


/*
 * Details-View
 */
@ExperimentalCoroutinesApi
fun HtmlElements.details() {
    val visibleWhenSaved = EntityStore.isSaved.map { if (it) "" else "d-none" }

    div("col-12") {
        div("card") {
            h5("card-header") { EntityStore.data.map {
                "Persons Details (...${it._id.takeLast(5)})" }.bind()
            }
            div("card-body") {
                div {
                    formGroup("name", EntityStore.sub(L.Person.name))
                    formGroup("age", EntityStore.sub(L.Person.age + numberFormat), inputType = "number")
                    formGroup("salary", EntityStore.sub(L.Person.salary + numberFormat), inputType = "number")
                }
            }
            div("card-footer") {
                button("btn btn-success") {
                    span {
                        className = EntityStore.running.map {
                            it?.let { "spinner-border spinner-border-sm mr-2" }.orEmpty()
                        }
                    }
                    EntityStore.isSaved.map { if(it) "Save" else "Add" }.bind()

                    clicks handledBy EntityStore.saveOrUpdate
                }
                button("btn btn-danger ml-2") {
                    className = visibleWhenSaved
                    +"Delete"
                    clicks handledBy EntityStore.delete
                }
                button("btn btn-warning ml-2") {
                    className = EntityStore.history.combine(EntityStore.data) { history, value ->
                        history.isNotEmpty() && history.first() != value
                    }.map { if (it) "" else "d-none" }
                    +"Undo"
                    clicks handledBy EntityStore.undo
                }
                button("btn btn-info ml-2") {
                    className = visibleWhenSaved
                    +"Close"
                    clicks handledBy EntityStore.reset
                }
                button("btn btn-secondary mx-2") {
                    text("Show data")
                    attr("data-toggle", "collapse")
                    attr("data-target", "#showData")
                }
                div("collapse mt-2", id = "showData") {
                    div("card card-body") {
                        pre {
                            code {
                                EntityStore.data.map { JSON.stringify(it, space = 2) }.bind()
                            }
                        }
                    }
                }
            }
        }
    }
}

fun HtmlElements.formGroup(
    label: String,
    store: Store<String>,
    inputType: String = "text",
    cssClassName: Flow<String> = const(""),
    handleChanges: Input.(Store<String>) -> Unit = {
        changes.values() handledBy store.update
    }
) {
    div("form-group") {
        className = cssClassName

        label(`for` = store.id) {
            +label
        }
        input("form-control", id = store.id) {
            value = store.data
            handleChanges(store)
        }
    }
}

@ExperimentalStdlibApi
@ExperimentalCoroutinesApi
@FlowPreview
fun main() {
    render {
        section {
            div("row") {
                details()
            }
            div("row mt-2") {
                table()
            }
        }
    }.mount("target")

    EntityStore.trigger handledBy QueryStore.query
}