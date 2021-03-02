package dev.fritz2.examples.routing

import dev.fritz2.dom.html.render
import dev.fritz2.dom.selectedText
import dev.fritz2.dom.states
import dev.fritz2.routing.router
import dev.fritz2.routing.select
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.flow.map

object Pages {
    const val home = "Home"
    const val show = "Show"
    const val change = "Change"
}

object Roles {
    const val anonymous = "anonymous"
    const val user = "user"
    const val admin = "admin"
}

@ExperimentalCoroutinesApi
@FlowPreview
fun main() {

    val router = router(mapOf("page" to Pages.home))

    render("#target") {
        div {
            nav("navbar navbar-expand-lg navbar-light bg-light") {
                a("navbar-brand") {
                    +"Routing"
                    href("/")
                }
                button("navbar-toggler") {
                    attr("data-toggle", "collapse")
                    attr("data-target", "#navbarContent")

                    span("navbar-toggler-icon") {}
                }

                div("collapse navbar-collapse", id = "navbarContent") {
                    ul("navbar-nav mr-auto") {
                        li("btn nav-item") {
                            className(router.data.map {
                                if (it.containsValue(Pages.home)) "active" else ""
                            })

                            a("nav-link") {
                                +Pages.home

                                clicks.map {
                                    mapOf(
                                            "page" to Pages.home
                                    )
                                } handledBy router.navTo
                            }
                        }
                        li("btn nav-item") {
                            className(router.data.map {
                                if (it.containsValue(Pages.show)) "active" else ""
                            })

                            a("nav-link") {
                                +Pages.show

                                clicks.map {
                                    mapOf(
                                            "page" to Pages.show,
                                            "extra" to "extra text"
                                    )
                                } handledBy router.navTo
                            }
                        }
                        li("btn nav-item") {
                            className(router.data.map {
                                if (it.containsValue(Pages.change)) "active" else ""
                            })

                            a("nav-link") {
                                +Pages.change

                                clicks.map {
                                    mapOf(
                                            "page" to Pages.change,
                                            "debug" to false.toString(),
                                            "role" to Roles.anonymous
                                    )
                                } handledBy router.navTo
                            }
                        }
                    }
                }
            }
            div("card") {
                router.select("page").renderElement { (page, params) ->
                    when (page) {
                        Pages.home ->
                            div("card-body") {
                                h5("card-title") {
                                    +Pages.home
                                }
                                p("card-text") {
                                    +"""|Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        |sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        |sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
                                        |Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.""".trimMargin()
                                }
                            }
                        Pages.show ->
                            div("card-body") {
                                h5("card-title") {
                                    +Pages.show
                                }
                                div("form-group") {
                                    label {
                                        +"Extra parameter"
                                    }
                                    div("form-control") {
                                        +(params["extra"] ?: "")
                                        attr("readonly", "true")
                                    }
                                }
                            }
                        Pages.change ->
                            div("card-body") {
                                h5("card-title") {
                                    +Pages.change
                                }
                                div("form-group") {
                                    label {
                                        +"Debug"
                                    }
                                    div("form-check") {
                                        input("form-check-input", id = "debug") {
                                            type("checkbox")
                                            checked(params["debug"]?.toBoolean() ?: false)

                                            changes.states().map { checked ->
                                                params.plus("debug" to checked.toString())
                                            } handledBy router.navTo
                                        }
                                        label("form-check-label") {
                                            `for`("debug")
                                            +"enable debug flag"
                                        }
                                    }
                                }
                                div("form-group") {
                                    label {
                                        +"Role"
                                    }
                                    select("form-control") {
                                        option {
                                            +Roles.anonymous
                                            selected(params["role"] == Roles.anonymous)
                                        }
                                        option {
                                            +Roles.user
                                            selected(params["role"] == Roles.user)
                                        }
                                        option {
                                            +Roles.admin
                                            selected(params["role"] == Roles.admin)
                                        }

                                        changes.selectedText().map { text ->
                                            params.plus("role" to text)
                                        } handledBy router.navTo
                                    }
                                }
                            }
                        else ->
                            div("card-body") {
                                h5("card-title") {
                                    +"Page not found"
                                }
                                p("card-text") {
                                    +"""¯\_(ツ)_/¯"""
                                }
                            }
                    }
                }
            }
        }
    }
}