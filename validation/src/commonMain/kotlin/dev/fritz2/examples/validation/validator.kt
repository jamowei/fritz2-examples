package dev.fritz2.examples.validation

import com.soywiz.klock.Date
import com.soywiz.klock.DateTime
import dev.fritz2.identification.RootModelId
import dev.fritz2.lenses.Lens
import dev.fritz2.validation.ValidationMessage
import dev.fritz2.validation.Validator

enum class Status(val inputClass: String, val messageClass: String) {
    Valid("is-valid", "valid-feedback"),
    Invalid("is-invalid", "invalid-feedback")
}

data class Message(val id: String, val status: Status, val text: String) : ValidationMessage {
    override fun failed(): Boolean = status > Status.Valid
}

object PersonValidator : Validator<Person, Message, String>() {

    override fun validate(data: Person, metadata: String): List<Message> {
        // working with mutable list here is much more easier
        val msgs = mutableListOf<Message>()
        val idStore = RootModelId<Person>()

        // validate name
        if (data.name.trim().isBlank())
            msgs.add(Message(idStore.sub(L.Person.name).id, Status.Invalid, "Please provide a name"))
        else
            msgs.add(Message(idStore.sub(L.Person.name).id, Status.Valid, "Good name"))

        // validate the birthday
        when {
            data.birthday == Date(1900, 1, 1) -> {
                msgs.add(Message(idStore.sub(L.Person.birthday).id, Status.Invalid, "Please provide a birthday"))
            }
            data.birthday.year < 1900 -> {
                msgs.add(Message(idStore.sub(L.Person.birthday).id, Status.Invalid, "Its a bit to old"))
            }
            data.birthday.year > DateTime.now().yearInt -> {
                msgs.add(Message(idStore.sub(L.Person.birthday).id, Status.Invalid, "Cannot be in future"))
            }
            else -> {
                val age = DateTime.now().yearInt - data.birthday.year
                msgs.add(Message(idStore.sub(L.Person.birthday).id, Status.Valid, "Age is $age"))
            }
        }

        // check address fields
        val addressId = idStore.sub(L.Person.address)
        fun checkAddressField(name: String, lens: Lens<Address, String>) {
            val value = lens.get(data.address)
            if (value.trim().isBlank())
                msgs.add(Message(addressId.sub(lens).id, Status.Invalid, "Please provide a $name"))
            else
                msgs.add(Message(addressId.sub(lens).id, Status.Valid, "Ok"))
        }
        checkAddressField("street", L.Address.street)
        checkAddressField("house number", L.Address.number)
        checkAddressField("postalcode", L.Address.postalCode)
        checkAddressField("city", L.Address.city)

        // check activities
        if (data.activities.none { it.like })
            msgs.add(
                Message(
                    idStore.sub(L.Person.activities).id,
                    Status.Invalid,
                    "Please provide at least one activity"
                )
            )
        else
            msgs.add(
                Message(
                    idStore.sub(L.Person.activities).id,
                    Status.Valid,
                    "You choose ${data.activities.count { it.like }} activities"
                )
            )

        return msgs
    }
}