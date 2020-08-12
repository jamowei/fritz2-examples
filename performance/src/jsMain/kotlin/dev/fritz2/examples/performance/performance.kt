package dev.fritz2.examples.performance

import dev.fritz2.binding.RootStore
import dev.fritz2.binding.handledBy
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.sample

@ExperimentalCoroutinesApi
@FlowPreview
fun main() {

    val maxIterations = 100000

    val store = object : RootStore<Int>(0) {

        val start = handle { model ->
            flow {
                for (i in 1..maxIterations) {
                    emit(i)
                }
            } handledBy update
            model
        }

        val dummyHandler = handle { model ->
            model
        }
    }

    render {
        div("form-group") {

            store.data.render {
                p {
                    +"number of updates: $it"
                    clicks handledBy store.dummyHandler //register dummy handler
                }
            }.bind(preserveOrder = true)

            div("progress") {
                div("progress-bar") {
                    attr("role", "progressbar")
                    style = store.data.sample(1000).map {
                        "width: ${(it.toDouble() / maxIterations) * 100}%;"
                    }
                }
            }

            hr { }

            button("btn btn-primary") {
                text("start updates")
                clicks handledBy store.start
            }
        }
    }.mount("target")

}