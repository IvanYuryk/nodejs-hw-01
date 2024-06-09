import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    console.log('All Contacts:', contacts);
    return contacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
};

getAllContacts();
