import { Connection, createConnection } from 'typeorm';

export const databaseProviders = [{
  provide: Connection,
  useFactory: async () => await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    entities: [
      __dirname + '/../**/*.entity{.ts,.js}',
    ],
    logging: true,
    synchronize: true,
  }),
}];
