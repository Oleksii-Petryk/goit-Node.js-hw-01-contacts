const readContact = require('./readContact');

const listContacts = async () => {
    return await readContact();
};

// const listContacts = () => {
//     console.log("Показать таблицу контактов");
// };

module.exports = listContacts;