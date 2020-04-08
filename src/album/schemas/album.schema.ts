import { Schema } from 'mongoose';

export const AlbumSchema = new Schema({
  releaseDate: String,
  rating: Number,
  title: String,
  Year: String
});