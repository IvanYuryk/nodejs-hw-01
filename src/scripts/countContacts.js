import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.join(__dirname, '../db/db.json');

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
