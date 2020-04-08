import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get url(): string {
    return this.configService.get<string>('host');
  }
  get port(): number {
    return Number(this.configService.get<number>('APP_PORT'));
  }
}