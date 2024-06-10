import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.join(__dirname, '../db/db.json');

const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    contacts = contacts.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

    console.log('Thanos has snapped his fingers.');
  } catch (error) {
    console.error('Error performing Thanos snap:', error);
  }
};

thanos();
