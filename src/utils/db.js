import consola from 'consola';

import { dbConfig } from '../configs';
import { appErrors, appLogs, appWarnings } from '../constants';
import { slugQueries } from '../queries';

const { Client } = require('pg');

const db = new Client(dbConfig);

const initializeDb = async (db) => {
  try {
    const query = `
      ${slugQueries.createTable()}
    `;
    await db.query(query);

    consola.success({
      message: appLogs.Database.InitializationSucceeded,
      badge: true,
    });
  } catch (error) {
    consola.error({
      message: `${appErrors.Database.InitializationError}: "${error}"`,
      badge: true,
    });
    process.exit();
  }
};

const connectToDb = async () => {
  try {
    await db.connect();

    consola.success({
      message: appLogs.Database.ConnectionEstablished,
      badge: true,
    });

    await initializeDb(db);
  } catch (error) {
    consola.error({
      message: `${appErrors.Database.ConnectionError}: "${error}"`,
      badge: true,
    });
    process.exit();
  }
};

export { connectToDb };
export default db;
