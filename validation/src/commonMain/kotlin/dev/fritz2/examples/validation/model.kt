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
    val salary: Double = 1000.0,
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

object Formats {
    private val dateFormat: DateFormat = DateFormat("yyyy-MM-dd")
    val date: Lens<Date, String> = format(
        { dateFormat.parseDate(it) },
        { dateFormat.format(it) }
    )
    val currency: Lens<Double, String> = format(
        { it.toDouble() },
        { it.toString() }
    )
}