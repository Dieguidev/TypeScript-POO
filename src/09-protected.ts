export class Animal {
  constructor(protected name: string) {} //private no se hereda, protected deja heredar
                                        // protected no deja acceder desde afuera de las clases
  move() {
    console.log('Moving along');
  }

  greeting() {
    return `Hello, i'm ${this.name}`
  }

  protected doSomething() {
    console.log('doooo');
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
      console.log(`woof ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}


const cheis = new Dog('cheis', 'dieguidev');
cheis.woof(1);
cheis.move();
