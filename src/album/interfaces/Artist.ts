import { Document } from 'mongoose';

export interface Artist extends Document{
  _id: string
  firstName: string,
  lastName: string,
  birthDate: string
}