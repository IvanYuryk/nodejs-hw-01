import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.join(__dirname, '../db/db.json');

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
