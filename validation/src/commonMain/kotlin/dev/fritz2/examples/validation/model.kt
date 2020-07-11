package dev.fritz2.examples.validation

import com.soywiz.klock.*
import dev.fritz2.format.Format
import dev.fritz2.lenses.Lenses

@Lenses
data class Person(
    val name: String = "",
    val birthday: Date = Date(1900, 1, 1),
    val address: Address = Address(),
    val activities: List<Activity> = listOf(
        Activity("walking"),
        Activity("running"),
        Activity("meeting friends"),
        Activity("playing computer games"),
        Activity("programming"),
        Activity("to go biking")
    )
)

@Lenses
data class Address(
    val street: String = "",
    val number: String = "",
    val postalCode: String = "",
    val city: String = ""
)

@Lenses
data class Activity(
    val name: String,
    val like: Boolean = false
)

object Format {
    val date = object : Format<Date> {
        private val formatter: DateFormat = DateFormat("yyyy-MM-dd")
        override fun parse(value: String): Date = formatter.parseDate(value)
        override fun format(value: Date): String = formatter.format(value)
    }
}