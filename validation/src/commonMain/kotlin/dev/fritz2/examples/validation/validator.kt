package dev.fritz2.examples.validation

import dev.fritz2.identification.inspect
import dev.fritz2.lenses.Lens
import dev.fritz2.validation.ValidationMessage
import dev.fritz2.validation.Validator
import kotlinx.datetime.*

enum class Status(val inputClass: String, val messageClass: String) {
    Valid("is-valid", "valid-feedback"),
    Invalid("is-invalid", "invalid-feedback")
}

data class Message(val id: String, val status: Status, val text: String) : ValidationMessage {
    override fun isError(): Boolean = status > Status.Valid
}

class PersonValidator : Validator<Person, Message, String>() {

    override fun validate(data: Person, metadata: String): List<Message> {
        // working with mutable list here is much more easier
        val msgs = mutableListOf<Message>()
        val inspector = inspect(data)

        // validate name
        val name = inspector.sub(L.Person.name)
        if (name.data.trim().isBlank())
            msgs.add(Message(name.id, Status.Invalid, "Please provide a name"))
        else
            msgs.add(Message(name.id, Status.Valid, "Good name"))

        val salary = inspector.sub(L.Person.salary)
        if(salary.data < 1) {
            msgs.add(Message(salary.id, Status.Invalid, "Please provide a salary"))
        } else {
            msgs.add(Message(salary.id, Status.Valid, "Not bad"))
        }

        // validate the birthday
        val birthday = inspector.sub(L.Person.birthday)
        val today = Clock.System.todayAt(TimeZone.currentSystemDefault())
        when {
            birthday.data == LocalDate(1900, 1, 1) -> {
                msgs.add(Message(birthday.id, Status.Invalid, "Please provide a birthday"))
            }
            birthday.data.year < 1900 -> {
                msgs.add(Message(birthday.id, Status.Invalid, "Its a bit to old"))
            }
            birthday.data.year > today.year -> {
                msgs.add(Message(birthday.id, Status.Invalid, "Cannot be in future"))
            }
            else -> {
                val age = today.let {
                    val years = it.year - birthday.data.year
                    if(birthday.data.dayOfYear >= it.dayOfYear) years - 1 else years
                }
                msgs.add(Message(birthday.id, Status.Valid, "Age is $age"))
            }
        }

        // check address fields
        val address = inspector.sub(L.Person.address)
        fun checkAddressField(name: String, lens: Lens<Address, String>) {
            val field = address.sub(lens)
            if (field.data.trim().isBlank())
                msgs.add(Message(field.id, Status.Invalid, "Please provide a $name"))
            else
                msgs.add(Message(field.id, Status.Valid, "Ok"))
        }
        checkAddressField("street", L.Address.street)
        checkAddressField("house number", L.Address.number)
        checkAddressField("postalcode", L.Address.postalCode)
        checkAddressField("city", L.Address.city)

        // check activities
        val activities = inspector.sub(L.Person.activities)
        if (activities.data.none { it.like })
            msgs.add(
                Message(
                    activities.id,
                    Status.Invalid,
                    "Please provide at least one activity"
                )
            )
        else
            msgs.add(
                Message(
                    activities.id,
                    Status.Valid,
                    "You choose ${activities.data.count { it.like }} activities"
                )
            )

        return msgs
    }
}