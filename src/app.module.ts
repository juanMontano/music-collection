import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './album/albums.module';
import { AppConfigModule } from './config/app/config.module';
import { DataBaseConfigModule } from './config/database/data-base-config.module';

@Module({
  imports: [AlbumsModule,
    AppConfigModule,
    DataBaseConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
