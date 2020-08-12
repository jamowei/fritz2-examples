package dev.fritz2.examples.repositories

import dev.fritz2.lenses.Lenses
import kotlinx.serialization.Serializable
import dev.fritz2.serialization.Serializer
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.builtins.list
import kotlinx.serialization.json.Json

@Lenses
@Serializable
data class Person(
    val _id: String = "",
    val name: String = "",
    val age: Int = 0,
    val salary: Int = 0
)

@UnstableDefault
object PersonSerializer : Serializer<Person, String> {
    override fun read(msg: String): Person = Json.parse(Person.serializer(), msg)
    override fun readList(msg: String): List<Person> = Json.parse(Person.serializer().list, msg)
    override fun write(item: Person): String = Json.stringify(Person.serializer(), item)
    override fun writeList(items: List<Person>): String = Json.stringify(Person.serializer().list, items)
}