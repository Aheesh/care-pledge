// import { userRoutes } from './user';
import { HTTP_SUCCESS, } from '../../config/index.js'; 

export async function routes(server) {
  // server.register(userRoutes, { prefix: '/api' });

  server.get('/', async (_, res) => {
    const result = { hello: 'world'};
    return res.code(HTTP_SUCCESS).send(result);
  });
}