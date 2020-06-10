package dev.fritz2.examples.validation

import com.soywiz.klock.*
import dev.fritz2.format.Format
import dev.fritz2.lenses.Lenses
import dev.fritz2.lenses.WithId

@Lenses
data class Person(
    override val id: String,
    val name: String = "",
    val birthday: Date = Date(1900, 1, 1),
    val address: Address = Address(),
    val activities: List<Activity> = listOf(
        Activity("ac1", "walking"),
        Activity("ac2", "running"),
        Activity("ac3", "meeting friends"),
        Activity("ac4", "playing computer games"),
        Activity("ac5", "programming"),
        Activity("ac6", "to go biking")
    )
) : WithId

@Lenses
data class Address(
    val street: String = "",
    val number: String = "",
    val postalCode: String = "",
    val city: String = ""
)

@Lenses
data class Activity(
    override val id: String,
    val name: String,
    val like: Boolean = false
) : WithId

object Format {
    val date = object : Format<Date> {
        private val formatter: DateFormat = DateFormat("yyyy-MM-dd")
        override fun parse(value: String): Date = formatter.parseDate(value)
        override fun format(value: Date): String = formatter.format(value)
    }
}