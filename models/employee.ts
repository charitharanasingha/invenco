export default class {
  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  id!: number;
  first_name!: string;
  last_name!: string;
  age!: number;
}
