export class Tutor {
    id: number;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
    pets: Pet[];
  
    constructor(
      id: number,
      name: string,
      phone: string,
      email: string,
      date_of_birth: string,
      zip_code: string
    ) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.date_of_birth = date_of_birth;
      this.zip_code = zip_code;
      this.pets = [];
    }
}
  
export class Pet {
    id: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;

    constructor(
        id: number,
        name: string,
        species: string,
        carry: string,
        weight: number,
        date_of_birth: string
    ) {
        this.id = id;
        this.name = name;
        this.species = species;
        this.carry = carry;
        this.weight = weight;
        this.date_of_birth = date_of_birth;
    }
}
