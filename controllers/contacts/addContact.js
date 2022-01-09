const fs = require('fs/promises');
const crypto = require('crypto');
const path = require('path');
const readContact = require('./readContact');

const contactsPath = path.join(__dirname, '../../', 'db', 'contacts.json');

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

// const addContact = () => {
//     console.log("Добавляю контакт");
// };

module.exports = addContact;

