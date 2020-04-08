import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtistsService } from '../service/artists.service';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { Observable } from 'rxjs';
import { Artist } from '../interfaces/Artist';

@Controller('artists')
export class ArtistsController {

  constructor(private artistService: ArtistsService) {
  }

  @Get()
  getArtists(): Observable<any> {
    return this.artistService.getArtists$();
  }

  @Get(':id')
  getArtist(@Param('id') id: string): Observable<Artist> {
    return this.artistService.getArtist$(id);
  }

  @Post()
  createArtist(@Body() artist: CreateArtistDto): Observable<Artist> {
    return this.artistService.createArtist$(artist);
  }

  @Put(':id')
  updateArtist(@Body() artist: CreateArtistDto, @Param('id') id: string): Observable<Artist> {
    return this.artistService.updateArtist$(artist, id);
  }

  @Delete(':id')
  deleteArtist(@Param('id') id: string): Observable<Artist> {
    return this.artistService.deleteArtist$(id);
  }

}
