package dev.fritz2.examples.validation

import com.soywiz.klock.Date
import com.soywiz.klock.DateFormat
import com.soywiz.klock.format
import com.soywiz.klock.parseDate
import dev.fritz2.lenses.Lens
import dev.fritz2.lenses.Lenses
import dev.fritz2.lenses.format

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
    private val dateFormat: DateFormat = DateFormat("yyyy-MM-dd")
    val dateLens: Lens<Date, String> = format(
        { dateFormat.parseDate(it) },
        { dateFormat.format(it) }
    )
}