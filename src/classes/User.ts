import faker from 'faker';
import { Location } from '../classes/Map';

export class User implements Location {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string | null;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h2>User Name: ${this.name}</h2>`
  }
}