package dev.fritz2.examples.todomvc

import dev.fritz2.identification.uniqueId
import dev.fritz2.lenses.Lenses
import dev.fritz2.serialization.Serializer

@Lenses
data class ToDo(
    val id: String = uniqueId(),
    val text: String,
    val completed: Boolean = false
)

object ToDoSerializer : Serializer<ToDo, String> {
    override fun read(msg: String): ToDo {
        val split = msg.split(';')
        return ToDo(split[0], split[1], split[2].toBoolean())
    }

    override fun readList(msg: String): List<ToDo> {
        val split = msg.split("|")
        return split.map { read(it) }
    }

    override fun write(item: ToDo): String {
        return "${item.id};${item.text};${item.completed}"
    }

    override fun writeList(items: List<ToDo>): String {
        return items.joinToString("|") { write(it) }
    }

}