package dev.fritz2.examples.tictactoe

import dev.fritz2.components.validation.ComponentValidationMessage
import dev.fritz2.components.validation.ComponentValidator
import dev.fritz2.components.validation.infoMessage
import dev.fritz2.components.validation.successMessage
import dev.fritz2.identification.Inspector

object EndingValidator : ComponentValidator<Field, GameState>() {
    override fun validate(inspector: Inspector<Field>, metadata: GameState): List<ComponentValidationMessage> =
        buildList {
            if (inspector.data.any { it.isInWinningGroup }) {
                add(successMessage("", "Player ${metadata.player} has won!"))
            } else if (GameState.isFull(inspector.data)) {
                add(infoMessage("", "This is a draw!"))
            }
        }
}

class Engine(private val endingValidator: ComponentValidator<Field, GameState> = EndingValidator) {

    companion object {
        private val winningGroups = listOf(
            listOf(0, 1, 2),
            listOf(3, 4, 5),
            listOf(6, 7, 8),
            listOf(0, 3, 6),
            listOf(1, 4, 7),
            listOf(2, 5, 8),
            listOf(0, 4, 8),
            listOf(2, 4, 6)
        )

        private fun markWinningCells(state: GameState, field: Field): Field {
            val winningFields = winningGroups.filter { group ->
                group.map { field[it] }.all { it.symbol == state.player }
            }.flatten()
            return field.map { cell ->
                if (winningFields.contains(cell.id)) {
                    cell.copy(isInWinningGroup = true)
                } else
                    cell
            }
        }
    }

    fun next(state: GameState, move: Cell) =
        if (!state.hasEnded() && state.field[move.id].isBlank) {
            val newField = markWinningCells(state, state.field.map { if (it.id == move.id) move else it })
            val messages = endingValidator.validate(newField, state)
            state.copy(field = newField, player = state.nextPlayer(), messages = messages)
        } else {
            state
        }
}
