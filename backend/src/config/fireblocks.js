
import { FIREBLOCKS_API_KEY } from '../../config/index.js'
import fs from 'fs';
import path from 'path';
import { FireblocksSDK } from 'fireblocks-sdk';
const apiSecret = fs.readFileSync(path.resolve(__dirname, '../../config/fireblocks_secret.key'), 'utf8');
const baseUrl = 'https://sandbox-api.fireblocks.io';
export const fireblocks = new FireblocksSDK(apiSecret, FIREBLOCKS_API_KEY, baseUrl);
