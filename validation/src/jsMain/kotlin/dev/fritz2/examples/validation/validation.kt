package dev.fritz2.examples.validation

import com.soywiz.klock.DateFormat
import dev.fritz2.binding.*
import dev.fritz2.dom.html.Div
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.states
import dev.fritz2.dom.values
import kotlinx.browser.document
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.map
import kotlinx.dom.addClass
import kotlinx.dom.removeClass
import org.w3c.dom.get

object PersonStore : RootStore<Person>(Person()) {
    val validator = PersonValidator()

    val save = handleAndEmit<Person> { person ->
        // only update the list when new person is valid
        if (validator.isValid(person, "add")) {
            emit(person)
            cleanUpValMessages()
            Person()
        } else person
    }
}

object PersonListStore : RootStore<List<Person>>(emptyList()) {
    private val add = handle<Person> { list, person ->
        list + person
    }

    init {
        //connect the two stores
        PersonStore.save handledBy add
    }
}

fun RenderContext.details() {
    val name = PersonStore.sub(L.Person.name)
    val salary = PersonStore.sub(L.Person.salary + Formats.currency)
    val birthday = PersonStore.sub(L.Person.birthday + Formats.date)
    val address = PersonStore.sub(L.Person.address)
    val street = address.sub(L.Address.street)
    val number = address.sub(L.Address.number)
    val postalCode = address.sub(L.Address.postalCode)
    val city = address.sub(L.Address.city)
    val activities = PersonStore.sub(L.Person.activities)

    div("col-12") {
        div("card") {
            h5("card-header") { +"Person Details" }
            div("card-body") {
                div {
                    formInput("Name", name)

                    //salary
                    div("form-group") {
                        label {
                            `for`(salary.id)
                            +"Salary"
                        }
                        div("input-group") {
                            div("input-group-prepend") {
                                div("input-group-text") { +"$" }
                            }
                            input("form-control", id = salary.id) {
                                value(salary.data)
                                type("number")
                                step("10")
                                min("0")

                                changes.values() handledBy salary.update
                            }
                            div("message", id = "${salary.id}-message") { }
                        }
                    }

                    //birthday
                    div("form-group") {
                        label {
                            `for`(birthday.id)
                            +"Birthday"
                        }
                        input("form-control", id = birthday.id) {
                            value(birthday.data)
                            type("date")

                            changes.values() handledBy birthday.update
                        }
                        div("message", id = "${birthday.id}-message") { }
                    }

                    div("form-row") {
                        formInput("Street", street, extraClass = "col-md-6")
                        formInput("House Number", number, extraClass = "col-md-6")
                    }
                    div("form-row") {
                        formInput("Postal Code", postalCode, extraClass = "col-md-6")
                        formInput("City", city, extraClass = "col-md-6")
                    }
                    div("form-group") {
                        label {
                            `for`(activities.id)
                            +"Activities"
                        }
                        div(id = activities.id) {
                            activities.renderEach { activity ->
                                activityCheckbox(activity)
                            }
                        }
                        div("message", id = "${activities.id}-message") { }
                    }
                }
            }
            div("card-footer") {
                button("btn btn-primary") {
                    +"Add"
                    clicks handledBy PersonStore.save
                }

                button("btn btn-secondary mx-2") {
                    +"Show data"
                    attr("data-toggle", "collapse")
                    attr("data-target", "#showData")
                }
                div("collapse mt-2", id = "showData") {
                    div("card card-body") {
                        pre {
                            code {
                                PersonStore.data.map { JSON.stringify(it, space = 2) }.asText()
                            }
                        }
                    }
                }
            }
        }
    }
}

fun RenderContext.table() {
    div("col-12") {
        div("card") {
            h5("card-header") { +"List of Persons" }
            div("card-body") {
                table("table") {
                    thead("thead-dark") {
                        th { +"Name" }
                        th { +"Birthday" }
                        th { +"Address" }
                        th { +"Activities" }
                    }
                    tbody {
                        PersonListStore.data.renderEach { person ->
                            val completeAddress = "${person.address.street} ${person.address.number}, " +
                                    "${person.address.postalCode} ${person.address.city}"
                            val selectedActivities = person.activities.filter { it.like }.joinToString { it.name }

                            tr {
                                td { +person.name }
                                td { +person.birthday.format(DateFormat.FORMAT_DATE) }
                                td { +completeAddress }
                                td { +selectedActivities }
                            }
                        }
                    }
                }
            }
        }
    }
}

// resets all messages under input fields
fun cleanUpValMessages() {
    // clean up all input elements
    val inputs = document.getElementsByClassName("form-control")
    for (i in 0..inputs.length) {
        val input = inputs[i]
        input?.removeClass(Status.Invalid.inputClass, Status.Valid.inputClass)
    }
    // clean up all input messages
    val messages = document.getElementsByClassName("message")
    for (i in 0..messages.length) {
        val message = messages[i]
        message?.removeClass(Status.Invalid.messageClass, Status.Valid.messageClass)
        message?.textContent = ""
    }
    // activities
    document.getElementById(".activities")?.removeClass(Status.Invalid.inputClass, Status.Valid.inputClass)
}

// helper method for creating form-groups for text input
fun RenderContext.formInput(
    label: String,
    subStore: Store<String>,
    inputType: String = "text",
    extraClass: String = ""
) {
    div("form-group $extraClass") {
        label {
            `for`(subStore.id)
            +label
        }
        input("form-control", id = subStore.id) {
            placeholder(label)
            value(subStore.data)
            type(inputType)

            changes.values() handledBy subStore.update
        }
        div("message", id = "${subStore.id}-message") { }
    }
}

// helper method for creating checkboxes for activities
fun RenderContext.activityCheckbox(activity: SubStore<Person, List<Activity>, Activity>): Div {
    val name = activity.sub(L.Activity.name)
    val like = activity.sub(L.Activity.like)

    return div("form-check form-check-inline") {
        input("form-check-input", id = activity.id) {
            type("checkbox")
            checked(like.data)

            changes.states() handledBy like.update
        }
        label("form-check-label") {
            `for`(activity.id)
            name.data.asText()
        }
    }
}

@ExperimentalCoroutinesApi
@FlowPreview
fun main() {

    render("#target") {
        section {
            div("row") {
                details()
            }
            div("row mt-2") {
                table()
            }
        }
    }


    // adding bootstrap css classes to the validated elements
    PersonStore.validator.isValid.combine(PersonStore.validator.msgs) { isValid, msgs ->
        // cleanup validation
        cleanUpValMessages()

        // add messages to input groups only if there were errors
        if(!isValid) {
            for (msg in msgs) {
                val element = document.getElementById(msg.id)
                element?.addClass(msg.status.inputClass)
                val message = document.getElementById("${msg.id}-message")
                message?.addClass(msg.status.messageClass)
                message?.textContent = msg.text
            }
        }
    }.watch()
}