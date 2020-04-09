import { Document } from 'mongoose';

export interface Artist extends Document{
  id?: string
  firstName: string,
  lastName: string,
  birthDate: string
}