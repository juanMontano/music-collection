import { Injectable } from '@nestjs/common';
import { Artist } from '../interfaces/Artist';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { distinct, flatMap, map } from 'rxjs/operators';

@Injectable()
export class ArtistsService {

  constructor(@InjectModel('artist') private artistModel: Model<Artist>) {
  }

  getArtist$(id: string): Observable<Artist> {
    return fromPromise(this.artistModel.findById(id));
  }

  createArtist$(artist: CreateArtistDto): Observable<Artist> {
    return fromPromise(this.artistModel.create(artist));
  }

   updateArtist$(artist: CreateArtistDto, id: string): Observable<Artist> {
    return fromPromise( this.artistModel.findByIdAndUpdate(id, artist, { new: true }));
  }

   deleteArtist$(id: string): Observable<Artist> {
    return fromPromise(this.artistModel.findByIdAndDelete(id));
  }

  getArtists$(): Observable<any> {
    return fromPromise(this.artistModel.find())
      .pipe(
        flatMap(x => x),
        distinct((x) => x.lastName),
        map((x) => x.lastName),
      );
  }
}
