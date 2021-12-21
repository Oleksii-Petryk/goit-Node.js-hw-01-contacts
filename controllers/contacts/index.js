module.exports = [
   './listContacts.js',
   './addContact.js',
   './getContactById.js',
   './removeContact.js',
].reduce((obj, file) => {
   const m = require(file);
   Object.assign(obj, m);
   return obj;
}, {});