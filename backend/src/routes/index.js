import { HTTP_SUCCESS, } from '../../config/index.js'; 
import { fireblocks } from '../config/fireblocks.js';

export async function routes(server) {
  server.get('/', async (_, res) => {
    const result = { hello: 'world'};
    return res.code(HTTP_SUCCESS).send(result);
  });

  server.post('/create/wallet', async (req, res) => {
    const {userId} = req.body;
    console.log(userId);
    const username = 'test';
    const fireblocksResponse = await fireblocks.createInternalWallet(
      `${username} wallet`,
      userId
    );

    return res.code(HTTP_SUCCESS).send(fireblocksResponse);
  });
}