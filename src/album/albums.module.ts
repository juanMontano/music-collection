import { Module } from '@nestjs/common';
import { AlbumsService } from './service/albums.service';
import { AlbumsController } from './controller/albums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumSchema } from './schemas/album.schema';
import { ArtistSchema } from './schemas/artist.schema';
import { ArtistsController } from './controller/artists.controller';
import { ArtistsService } from './service/artists.service';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'album', schema: AlbumSchema},
    {name: 'artist', schema: ArtistSchema}
    ])],
  controllers: [AlbumsController, ArtistsController],
  providers: [AlbumsService, ArtistsService]
})
export class AlbumsModule {}
