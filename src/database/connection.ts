import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection: {
      host : 'mysql669.umbler.com',
      port: 41890,
      user : 'radiocampus',
      password : '3llcb233',
      database : 'radioifac'
    },
    useNullAsDefault: true
});

export default connection; 