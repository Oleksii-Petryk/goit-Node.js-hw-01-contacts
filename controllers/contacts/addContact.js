const fs = require('fs/promises');
const crypto = require('crypto');
const {readContact, contactsPath} = require('./readContact');

const addContact = async (name, email, phone) => {
    const contacts = await readContact()
    const newContact = { id: crypto.randomUUID(), name, email, phone }
    contacts.push(newContact)
    await fs.writeFile(
        contactsPath,
        JSON.stringify(contacts, null, 2),
    )
    return newContact
};

module.exports = addContact;

