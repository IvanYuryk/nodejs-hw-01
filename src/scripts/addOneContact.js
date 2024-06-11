import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    
    const contacts = JSON.parse(data);
    
    const newContact = createFakeContact();
    
    const updatedContacts = contacts.concat(newContact);
    
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    
    console.log('New contact added:', newContact);
  } catch (error) {
    console.error('Error handling db.json:', error);
  }
};

addOneContact();
