import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { AlbumsService } from '../service/albums.service';
import { Album } from '../interfaces/Album';
import { Observable } from 'rxjs';

@Controller('albums')
export class AlbumsController {

  constructor(private albumService: AlbumsService) {
  }

  @Get()
  getAlbums(): Observable<Album[]> {
    return this.albumService.getAlbums();
  }

  @Get(':id')
  getAlbum(@Param('id') id: string): Observable<Album> {
    return this.albumService.getAlbum(id);
  }

  @Post()
  createAlbum(@Body() album: CreateAlbumDto): Observable<Album> {
    return this.albumService.createAlbum(album);
  }

  @Delete(':id')
  deleteAlbum(@Param('id') id: string): Observable<Album> {
    return this.albumService.deleteArtist$(id);
  }

  @Put(':id')
  updateAlbum(@Body() album: CreateAlbumDto, @Param('id') id: string): Observable<Album> {
    return this.albumService.updateArtist$(album, id);
  }

}
