const readContact = require('./readContact');

const getContactById = async (contactId) => {
    const contacts = await readContact();
    const [contact] = contacts.filter((contact) => contact.id === contactId);
    return contact;
};

// const getContactById = () => {
//     console.log("Хочу получить контакт по ID");
// };

module.exports = getContactById;