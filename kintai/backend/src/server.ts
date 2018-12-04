require('dotenv').config();

const jwt = require('jsonwebtoken');
const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');

import { getConnectionBySystemId } from './orm';

if (process.env.NODE_ENV === 'development') {
  require('./cron');
}

const server = new GraphQLServer({
  typeDefs: ['./src/schema.graphql'],
  resolvers,
  context: async (req: any) => {
    // const [host, port] = req.request.get('host').split(':');
    const conMaster = await getConnectionBySystemId('kintai');

    let jwtObject: any = {};
    const Authorization = req.request.get('Authorization');
    if (Authorization) {
      const token = Authorization.replace('Bearer ', '');
      try {
        jwtObject = jwt.verify(token, process.env.APP_SECRET);
      } catch (e) {
        jwtObject = {};
      }
    }

    let con;
    if (jwtObject.systemId && jwtObject.systemId !== 'master') {
      const systemId = 'kintai_' + jwtObject.systemId;
      con = await getConnectionBySystemId(systemId);
    }

    return { ...req, con, conMaster, jwtObject };
  }
});

server.start({
  endpoint: '/graphql',
  subscriptions: '/graphql',
}, () => console.log('Server is running on http://localhost:4000'));
