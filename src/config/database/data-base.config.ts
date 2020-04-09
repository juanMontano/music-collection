import { registerAs } from '@nestjs/config';
import { DATA_BASE_CONFIG } from './constants';

export default registerAs (DATA_BASE_CONFIG, () => ({
  uri: process.env.DATA_BASE_HOST,
  port: process.env.DATA_BASE_PORT
}))