package dev.fritz2.examples.nestedmodel

import dev.fritz2.binding.*
import dev.fritz2.dom.Tag
import dev.fritz2.dom.html.Div
import dev.fritz2.dom.html.HtmlElements
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.dom.states
import dev.fritz2.dom.values
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.map
import org.w3c.dom.HTMLDivElement


object PersonStore : RootStore<Person>(Person(), id = "person") {
    val save = handleAndOffer<Person> { p ->
        offer(p)
        p
    }
}

object PersonListStore : RootStore<List<Person>>(emptyList(), id = "list") {
    val add: SimpleHandler<Person> = handle { list, person ->
        list + person
    }
}

fun HtmlElements.details() {
    val name = PersonStore.sub(L.Person.name)
    val birthday = PersonStore.sub(L.Person.birthday)
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
                formGroup("Name", name)
                formGroup("Birthday", birthday, "date")
                div("form-row") {
                    formGroup("Street", street, extraClass = "col-md-6")
                    formGroup("House Number", number, extraClass = "col-md-6")
                }
                div("form-row") {
                    formGroup("Postal Code", postalCode, extraClass = "col-md-6")
                    formGroup("City", city, extraClass = "col-md-6")
                }
                div("form-row") {
                    div("form-group") {
                        activities.each().render { activity ->
                            activityCheckbox(activity)
                        }.bind()
                    }
                }
            }
            div("card-footer") {
                div("form-group") {
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
                            val fullAddress = "${person.address.street} ${person.address.number}, " +
                                    "${person.address.postalCode} ${person.address.city}"
                            val selectedActivities = person.activities.filter { it.like }.joinToString { it.name }


                            tr {
                                td { text(person.name) }
                                td { text(person.birthday) }
                                td { text(fullAddress) }
                                td { text(selectedActivities) }
                            }
                        }.bind()
                    }
                }
            }
        }
    }
}

// helper method for creating form-groups from SubStores
fun HtmlElements.formGroup(
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
    }
}

// helper method for creating checkboxes for activities
fun HtmlElements.activityCheckbox(activity: SubStore<Person, List<Activity>, Activity>): Div {
    val activityName = activity.sub(L.Activity.name)
    val activityLike = activity.sub(L.Activity.like)


    return div("form-check form-check-inline") {
        input("form-check-input", id = activity.id) {
            type = const("checkbox")
            checked = activityLike.data

            changes.states() handledBy activityLike.update
        }
        label("form-check-label", `for` = activity.id) {
            activityName.data.bind()
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

}