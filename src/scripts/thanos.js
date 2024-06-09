import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

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
