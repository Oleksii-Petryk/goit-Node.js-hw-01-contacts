const fs = require('fs/promises');
const path = require('path');
const readContact = require('./readContact');

const contactsPath = path.join(__dirname, '../../', 'db', 'contacts.json');

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

// const removeContact = () => {
//     console.log("Удалить контакт");
// };

module.exports = removeContact;
