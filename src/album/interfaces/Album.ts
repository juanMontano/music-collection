import { Document } from 'mongoose';

export interface Album extends Document {
  id?: string,
  releaseDate: string,
  rating: number,
  title: string,
  Year: string
}