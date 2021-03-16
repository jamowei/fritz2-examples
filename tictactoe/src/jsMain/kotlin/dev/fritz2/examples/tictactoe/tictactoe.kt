package dev.fritz2.examples.tictactoe

import dev.fritz2.binding.RootStore
import dev.fritz2.components.*
import dev.fritz2.components.validation.Severity
import dev.fritz2.dom.html.render
import dev.fritz2.styling.theme.IconDefinition
import dev.fritz2.styling.theme.Theme
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.map

class GameStore(private val engine: Engine, initialState: GameState) : RootStore<GameState>(initialState) {
    val check = handle<Cell> { state, move ->
        engine.next(state, move)
    }
}

val circleIcon = IconDefinition(
    displayName = "circle",
    viewBox = "-3 -3 30 30",
    svg = """<path fill-rule="evenodd" clip-rule="evenodd" 
             d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 
             16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 
             2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" 
             fill="currentColor"/>""".trimIndent()
)

@ExperimentalCoroutinesApi
fun iconForPlayer(symbol: String): IconDefinition = if (symbol == "X") Theme().icons.close else circleIcon

@ExperimentalCoroutinesApi
fun main() {

    val gameStore = GameStore(Engine(), GameState())

    render("#target") {
        flexBox({
            justifyContent { center }
            width { full }
        }) {
            stackUp({
                width { "30.5rem" }
            }) {
                items {
                    gridBox({
                        width { full }
                        columns { repeat(3) { "1fr" } }
                        gap { tiny }
                        background { color { gray300 } }
                    }) {
                        gameStore.data.map { it.field }.renderEach { cell ->
                            box({
                                height { "10rem" }
                                display { flex }
                                justifyContent { center }
                                alignItems { center }
                                background { color { if (cell.isInWinningGroup) success else "white" } }
                            }) {
                                if (cell.symbol.isNotBlank()) {
                                    icon({
                                        size { full }
                                    }) {
                                        def(iconForPlayer(cell.symbol))
                                    }
                                }
                                clicks.events.map {
                                    cell.copy(symbol = gameStore.current.player)
                                } handledBy gameStore.check
                            }
                        }
                    }
                    clickButton({
                        width { full }
                        background { color { info } }
                    }) { text("Reset") }.map {
                        GameState(player = gameStore.current.player)
                    } handledBy gameStore.update
                    gameStore.data.render {
                        if (it.hasEnded()) {
                            alert({
                                width { full }
                                radius { small }
                            }) {
                                severity { if (it.messages.first().severity == Severity.Success) success else info }
                                content(it.messages.first().message)
                            }
                        }
                    }
                }
            }
        }
    }
}