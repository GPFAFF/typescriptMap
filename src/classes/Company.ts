import faker from 'faker';
import { Location } from '../classes/Map'

export class Company implements Location {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string | null;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {
    return `
      <h2>Company Name: ${this.name}</h2>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    `
  }
}