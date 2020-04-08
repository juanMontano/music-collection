import { Schema } from 'mongoose';

export const ArtistSchema = new Schema({
  firstName: String,
  lastName: String,
  birthDate: String,
});