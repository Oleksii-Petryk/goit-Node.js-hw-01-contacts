const fs = require('fs/promises');
const {readContact, contactsPath} = require('./readContact');


const removeContact = async (contactId) => {
    const contacts = await readContact();
    const [contact] = contacts.filter((contact) => contact.id === contactId);
    contacts.splice(contacts.indexOf(contact), 1);
    await fs.writeFile(
        contactsPath,
        JSON.stringify(contacts, null, 2),
    )

    return contact;
};

module.exports = removeContact;
