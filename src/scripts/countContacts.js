import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    const count = contacts.length;
    console.log('Number of Contacts:', count);
    return count;
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
};

countContacts();
