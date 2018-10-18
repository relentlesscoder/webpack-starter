export class Car {
  constructor(id){
    this.id = id;
  }

  identify(postfix){
    return `Car Id: ${this.id} ${postfix}`;
  }
}