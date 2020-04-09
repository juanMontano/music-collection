import { registerAs } from '@nestjs/config';
import { APP_CONFIG } from './constants';

export default registerAs (APP_CONFIG, () => ({
  port: process.env.APP_PORT || 3000,
  host: process.env.APP_HOST,
}));