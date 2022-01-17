package dev.fritz2.examples.validation

import dev.fritz2.lenses.Lens
import dev.fritz2.lenses.Lenses
import dev.fritz2.lenses.format
import kotlinx.datetime.LocalDate
import kotlinx.datetime.toLocalDate

@Lenses
data class Person(
    val name: String = "",
    val salary: Double = 0.0,
    val birthday: LocalDate = LocalDate(1900, 1, 1),
    val address: Address = Address(),
    val activities: List<Activity> = listOf(
        Activity("walking"),
        Activity("running"),
        Activity("meeting friends"),
        Activity("playing computer games"),
        Activity("programming"),
        Activity("to go biking")
    )
) {
    companion object {
        const val id = "person"
    }
}

@Lenses
data class Address(
    val street: String = "",
    val number: String = "",
    val postalCode: String = "",
    val city: String = ""
) {
    companion object
}

@Lenses
data class Activity(
    val name: String,
    val like: Boolean = false
) {
    companion object
}


object Formats {
    val date: Lens<LocalDate, String> = format(
        { it.toLocalDate() },
        { it.toString() }
    )
    val currency: Lens<Double, String> = format(
        { it.toDouble() },
        { it.toString() }
    )
}