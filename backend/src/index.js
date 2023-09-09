import fastify from 'fastify';
import helmet from 'fastify-helmet';
// import rateLimit from 'fastify-rate-limit';
// import { setRateLimit } from './config/rate-limit';
import { setDatabaseConnections } from './config/database/postgres/connection.js';
import { routes } from './routes/index.js';
// import { TIME_WINDOW, MAX_LIMIT } from '../config/index.js';

const server = fastify();
server.register(helmet);
// server.register(
//   rateLimit, 
//   setRateLimit(TIME_WINDOW, MAX_LIMIT)
// );
setDatabaseConnections(server);
server.register(routes);

export default server;