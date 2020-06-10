package dev.fritz2.examples.todomvc

import dev.fritz2.identification.uniqueId
import dev.fritz2.lenses.Lenses
import dev.fritz2.lenses.WithId

@Lenses
data class ToDo(
    val text: String,
    val completed: Boolean = false,
    val editing: Boolean = false,
    override val id: String = uniqueId()
) : WithId