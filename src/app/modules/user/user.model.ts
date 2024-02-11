import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';


// Define the Mongoose schema based on the TUser interface
const userSchema = new Schema<TUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maidenName: { type: String },
  age: { type: Number },
  gender: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  username: { type: String },
  password: { type: String },
  birthDate: { type: String },
  image: { type: String, required: true },
  bloodGroup: { type: String },
  height: { type: Number },
  weight: { type: Number },
  eyeColor: { type: String },
  hair: {
    color: { type: String },
    type: { type: String,}
  },
  domain: { type: String },
  ip: { type: String },
  address: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    },
    postalCode: { type: String },
    state: { type: String, required: true }
  },
  macAddress: { type: String },
  university: { type: String },
  bank: {
    cardExpire: { type: String },
    cardNumber: { type: String },
    cardType: { type: String },
    currency: { type: String },
    iban: { type: String }
  },
  company: {
    address: {
      address: { type: String },
      city: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number }
      },
      postalCode: { type: String },
      state: { type: String }
    },
    department: { type: String },
    name: { type: String, required: true },
    title: { type: String }
  },
  ein: { type: String },
  ssn: { type: String },
  userAgent: { type: String },
  crypto: {
    coin: { type: String },
    wallet: { type: String },
    network: { type: String }
  }
});


export const User = model<TUser>('User', userSchema);
