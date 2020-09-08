package dev.fritz2.examples.repositories

import dev.fritz2.lenses.Lenses
import dev.fritz2.serialization.Serializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.json.Json

@Lenses
@Serializable
data class Person(
    val _id: String = "",
    val name: String = "",
    val age: Int = 0,
    val salary: Int = 0
)

object PersonSerializer : Serializer<Person, String> {
    override fun read(msg: String): Person = Json.decodeFromString(Person.serializer(), msg)
    override fun readList(msg: String): List<Person> = Json.decodeFromString(ListSerializer(Person.serializer()), msg)
    override fun write(item: Person): String = Json.encodeToString(Person.serializer(), item)
    override fun writeList(items: List<Person>): String = Json.encodeToString(ListSerializer(Person.serializer()), items)
}