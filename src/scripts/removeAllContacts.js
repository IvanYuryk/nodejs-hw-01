import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const removeAllContacts = async () => {
  try {
    const contacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('All contacts removed.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
};

removeAllContacts();
