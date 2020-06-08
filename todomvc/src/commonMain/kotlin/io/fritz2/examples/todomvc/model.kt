package io.fritz2.examples.todomvc

import io.fritz2.lenses.Lenses
import io.fritz2.lenses.WithId
import io.fritz2.utils.createUUID

@Lenses
data class ToDo(
    val text: String,
    val completed: Boolean = false,
    val editing: Boolean = false,
    override val id: String = createUUID()
) : WithId