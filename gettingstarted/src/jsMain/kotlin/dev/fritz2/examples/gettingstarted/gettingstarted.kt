package dev.fritz2.examples.gettingstarted

import dev.fritz2.binding.storeOf
import dev.fritz2.dom.html.render
import dev.fritz2.dom.values

fun main() {
    val store = storeOf("")

    render("#target") {
        div {
            div("form-group") {
                label {
                    `for`(store.id)
                    +"Input"
                }
                input("form-control", id = store.id) {
                    placeholder("Add some input")
                    value(store.data)
                    changes.values() handledBy store.update
                }
            }
            div("form-group") {
                label {
                    +"Value"
                }
                div("form-control") {
                    store.data.asText()
                    attr("readonly", "true")
                }
            }
            div("form-group") {
                button("btn btn-primary") {
                    +"Add a dot"
                    clicks handledBy store.handle { "$it." }
                }
            }
        }
    }
}