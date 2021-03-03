package dev.fritz2.examples.tictactoe

import dev.fritz2.components.validation.ComponentValidationMessage

data class Cell(val id: Int, val symbol: String, val isInWinningGroup: Boolean = false) {
    val isBlank: Boolean
        get() = symbol.isBlank()
}

typealias Field = List<Cell>

data class GameState(
    val field: Field = (0..8).map { Cell(it, "") },
    val player: String = "X",
    val messages: List<ComponentValidationMessage> = emptyList()
) {
    companion object {
        fun isFull(field: Field) = field.all { !it.isBlank }
    }

    fun hasEnded() = messages.isNotEmpty()
    fun nextPlayer() = if (player == "X") "O" else "X"
}
