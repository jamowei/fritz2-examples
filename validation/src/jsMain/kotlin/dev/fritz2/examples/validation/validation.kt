package dev.fritz2.examples.validation

import com.soywiz.klock.DateFormat
import dev.fritz2.binding.*
import dev.fritz2.dom.Tag
import dev.fritz2.dom.html.HtmlElements
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.dom.states
import dev.fritz2.dom.values
import dev.fritz2.identification.uniqueId
import dev.fritz2.validation.Validation
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onEach
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.dom.addClass
import kotlin.dom.removeClass

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
fun <X, Y> HtmlElements.stringInput(
    label: String,
    subStore: SubStore<X, Y, String>,
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

    val personStore = object : RootStore<Person>(Person(uniqueId())), Validation<Person, Message, String> {
        override val validator = PersonValidator

        val save = handleAndEmit<Unit, Person> { person ->
            // only update the list when new person is valid
            if (validate(person, "add")) {
                offer(person)
                cleanUpValMessages()
                Person(uniqueId())
            } else person
        }
    }

    val name = personStore.sub(L.Person.name)
    val birthday = personStore.sub(L.Person.birthday) using Format.date
    val address = personStore.sub(L.Person.address)
    val street = address.sub(L.Address.street)
    val number = address.sub(L.Address.number)
    val postalCode = address.sub(L.Address.postalCode)
    val city = address.sub(L.Address.city)
    val activities = personStore.sub(L.Person.activities)

    // extend with the Validation interface and provide a PersonValidator
    val listStore = object : RootStore<List<Person>>(emptyList()) {
        val add = handle<Person> { list, person ->
            list + person
        }
    }

    //connect the two stores
    personStore.save handledBy listStore.add


    // adding bootstrap css classes to the validated elements
    personStore.validator.msgs.onEach { msgs ->
        // cleanup validation
        cleanUpValMessages()

        // add messages to input groups only if there were errors
        if(msgs.any { it.failed() }) {
            for (msg in msgs) {
                val element = document.getElementById(msg.id)
                element?.addClass(msg.status.inputClass)
                val message = document.getElementById("${msg.id}-message")
                message?.addClass(msg.status.messageClass)
                message?.textContent = msg.text
            }
        }
    }.watch()

    render {
        div {
            h4 { text("Person") }
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
                    activities.eachStore().map { activity ->
                        activityCheckbox(activity)
                    }.bind()
                }
                div("message", id = "${activities.id}-message") { }
            }
            div("form-group my-4") {
                button("btn btn-primary") {
                    text("Add")
                    clicks handledBy personStore.save
                }

                button("btn btn-secondary mx-2") {
                    text("Show data")
                    attr("data-toggle", "collapse")
                    attr("data-target", "#showData")
                }
                div("collapse", id = "showData") {
                    div("card card-body") {
                        pre {
                            code {
                                personStore.data.map { JSON.stringify(it, space = 2) }.bind()
                            }
                        }
                    }
                }
            }

            hr("my-4") { }

            table("table") {
                thead("thead-dark") {
                    th { text("Name") }
                    th { text("Birthday") }
                    th { text("Address") }
                    th { text("Activities") }
                }
                tbody {
                    listStore.data.each().map { person ->
                        val completeAddress = "${person.address.street} ${person.address.number}, " +
                                "${person.address.postalCode} ${person.address.city}"
                        val selectedActivities = person.activities.filter { it.like }.map { it.name }.joinToString()

                        render {
                            tr {
                                td { text(person.name) }
                                td { text(person.birthday.format(DateFormat.FORMAT_DATE)) }
                                td { text(completeAddress) }
                                td { text(selectedActivities) }
                            }
                        }
                    }.bind()
                }
            }
        }
    }.mount("target")
}