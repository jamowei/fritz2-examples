package dev.fritz2.examples.todomvc

import dev.fritz2.identification.uniqueId
import dev.fritz2.lenses.Lenses

@Lenses
data class ToDo(
    val id: String = uniqueId(),
    val text: String,
    val completed: Boolean = false,
    val editing: Boolean = false
)