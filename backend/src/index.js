import fastify from 'fastify';
import helmet from 'fastify-helmet';
import cors from '@fastify/cors';
// import rateLimit from 'fastify-rate-limit';
// import { setRateLimit } from './config/rate-limit';
import { setDatabaseConnections } from './config/database/postgres/connection.js';
import { routes } from './routes/index.js';

// import { TIME_WINDOW, MAX_LIMIT } from '../config/index.js';
const server = fastify();
server.register(helmet);
server.register(cors, { 
  origin: true,
  methods: ['GET', 'PUT', 'POST']
});

setDatabaseConnections(server);
server.register(routes);

export default server;