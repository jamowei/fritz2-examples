package dev.fritz2.examples.validation

import com.soywiz.klock.DateFormat
import dev.fritz2.binding.*
import dev.fritz2.dom.Tag
import dev.fritz2.dom.html.HtmlElements
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.dom.states
import dev.fritz2.dom.values
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.map
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass

object PersonStore : RootStore<Person>(Person()) {
    val validator = PersonValidator()

    val addOrUpdate = handle<Person> { old, new ->
        if (validator.isValid(new, "add")) new else old
    }

    val save = handleAndOffer<Person> { person ->
        // only update the list when new person is valid
        if (validator.isValid(person, "add")) {
            offer(person)
            cleanUpValMessages()
            Person()
        } else person
    }
}

object PersonListStore : RootStore<List<Person>>(emptyList()) {
    val add = handle<Person> { list, person ->
        list + person
    }
}

/*
 * Details-View
 */
@ExperimentalCoroutinesApi
fun HtmlElements.details() {
    val name = PersonStore.sub(L.Person.name)
    val birthday = PersonStore.sub(L.Person.birthday + Format.dateLens)
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
                    stringInput("Name", name)

                    //birthday
                    div("form-group") {
                        label(`for` = birthday.id) {
                            text("Birthday")
                        }
                        input("form-control", id = birthday.id) {
                            value = birthday.data
                            type = const("date")

                            changes.values() handledBy birthday.update
                        }
                        div("message", id = "${birthday.id}-message") { }
                    }

                    div("form-row") {
                        stringInput("Street", street, extraClass = "col-md-6")
                        stringInput("House Number", number, extraClass = "col-md-6")
                    }
                    div("form-row") {
                        stringInput("Postal Code", postalCode, extraClass = "col-md-6")
                        stringInput("City", city, extraClass = "col-md-6")
                    }
                    div("form-group") {
                        label(`for` = activities.id) {
                            text("Activities")
                        }
                        div(id = activities.id) {
                            activities.each().map { activity ->
                                activityCheckbox(activity)
                            }.bind()
                        }
                        div("message", id = "${activities.id}-message") { }
                    }
                }
            }
            div("card-footer") {
                button("btn btn-primary") {
                    text("Add")
                    clicks handledBy PersonStore.save
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
                                PersonStore.data.map { JSON.stringify(it, space = 2) }.bind()
                            }
                        }
                    }
                }
            }
        }
    }
}

fun HtmlElements.table() {
    div("col-12") {
        div("card") {
            h5("card-header") { +"List of Persons" }
            div("card-body") {
                table("table") {
                    thead("thead-dark") {
                        th { text("Name") }
                        th { text("Birthday") }
                        th { text("Address") }
                        th { text("Activities") }
                    }
                    tbody {
                        PersonListStore.data.each().render { person ->
                            val completeAddress = "${person.address.street} ${person.address.number}, " +
                                    "${person.address.postalCode} ${person.address.city}"
                            val selectedActivities = person.activities.filter { it.like }.joinToString { it.name }

                            tr {
                                td { text(person.name) }
                                td { text(person.birthday.format(DateFormat.FORMAT_DATE)) }
                                td { text(completeAddress) }
                                td { text(selectedActivities) }
                            }
                        }.bind()
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
fun HtmlElements.stringInput(
    label: String,
    subStore: Store<String>,
    inputType: String = "text",
    extraClass: String = ""
) {
    div("form-group $extraClass") {
        label(`for` = subStore.id) {
            text(label)
        }
        input("form-control", id = subStore.id) {
            placeholder = const(label)
            value = subStore.data
            type = const(inputType)

            changes.values() handledBy subStore.update
        }
        div("message", id = "${subStore.id}-message") { }
    }
}

// helper method for creating checkboxes for activities
fun activityCheckbox(activity: SubStore<Person, List<Activity>, Activity>): Tag<HTMLDivElement> {
    val name = activity.sub(L.Activity.name)
    val like = activity.sub(L.Activity.like)

    return render {
        div("form-check form-check-inline") {
            input("form-check-input", id = activity.id) {
                type = const("checkbox")
                checked = like.data

                changes.states() handledBy like.update
            }
            label("form-check-label", `for` = activity.id) {
                name.data.bind()
            }
        }
    }
}

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

    //connect the two stores
    PersonStore.save handledBy PersonListStore.add


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