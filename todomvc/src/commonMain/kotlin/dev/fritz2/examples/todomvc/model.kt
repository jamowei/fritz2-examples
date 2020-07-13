package dev.fritz2.examples.todomvc

import dev.fritz2.identification.uniqueId
import dev.fritz2.lenses.Lenses

@Lenses
data class ToDo(
    val text: String,
    val uuid: String = uniqueId(),
    val completed: Boolean = false,
    val editing: Boolean = false
)