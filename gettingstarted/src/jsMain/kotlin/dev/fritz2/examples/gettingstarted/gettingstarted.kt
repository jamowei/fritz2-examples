package dev.fritz2.examples.gettingstarted

import dev.fritz2.binding.RootStore
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.dom.values
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview

@ExperimentalCoroutinesApi
@FlowPreview
fun main() {

    val store = object : RootStore<String>("", id = "model") {
        val addADot = handle { model ->
            "$model."
        }
    }

    val gettingstarted = render {
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
                    clicks handledBy store.addADot
                }
            }
        }
    }

    gettingstarted.mount("target")
}