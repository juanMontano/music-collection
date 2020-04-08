import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumsModule } from './album/albums.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from './config/app/config.module';

@Module({
  imports: [AlbumsModule,
    AppConfigModule,
    MongooseModule.forRoot('mongodb://localhost/music-collection'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
