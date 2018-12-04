import 'reflect-metadata';
import { createConnection, getConnection, Connection } from 'typeorm';

export const getConnectionBySystemId = (systemId: string, sync = true): Promise<Connection> => {
  if ( systemId === undefined || systemId.length === 0 ){
    throw new Error('systemId not found.');
  }
  let entities = 'src/entity/**/*.ts';
  if ( systemId === 'kintai' ) {
    entities = 'src/entity/Account.ts';
  }
  try {
    const con = getConnection(systemId);
    if (con.isConnected === false) {
      throw new Error('ER_DBACCESS_DENIED_ERROR');
    }
    return Promise.resolve(con);
  } catch (e) {
    return createConnection({
      name: systemId,
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: systemId,
      synchronize: sync,
      logging: true,
      connectTimeout: 1000 * 3,
      entities: [entities]
    });
  }
};

export const defaultSeed = {
  config: [
    { name:'day_begin_round_unit', val1: '1' },
    { name:'day_end_round_unit', val1: '1' }
  ],
};