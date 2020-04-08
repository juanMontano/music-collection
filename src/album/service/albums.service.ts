import { Injectable } from '@nestjs/common';
import { Album } from '../interfaces/Album';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';

@Injectable()
export class AlbumsService {

  constructor(@InjectModel('album') private albumModel: Model<Album>) {
  }

  getAlbums(): Observable<Album[]> {
    return fromPromise(this.albumModel.find());
  }

  getAlbum(id: string): Observable<Album> {
    return fromPromise(this.albumModel.findById(id));
  }

  createAlbum(createAlbumDto: CreateAlbumDto): Observable<Album> {
    const album = new this.albumModel(createAlbumDto);
    return fromPromise(this.albumModel.create(album));
  }

  updateArtist$(album: CreateAlbumDto, id: string): Observable<Album> {
    return fromPromise(this.albumModel.findByIdAndUpdate(id, album, { new: true }));
  }

  deleteArtist$(id: string): Observable<Album> {
    return fromPromise(this.albumModel.findByIdAndDelete(id));
  }
}
