import {faker} from "@faker-js/faker";

export class Company {
  name: string
  catchPhrase: string
  location:{
    lat:number
    lng:number
  }

  constructor() {
    this.name=faker.company.name()
    this.catchPhrase=faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    }
  }
  content():string {
    return (`
      Name: ${this.name}
      </br>
      CatchPhrase: ${this.catchPhrase}
    `)
  }
}