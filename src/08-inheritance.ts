export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, i'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    name: string, //no se coloca public porque solo pasamos el dato a la clase padre
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'dieguidev');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
console.log(cheis.owner);

