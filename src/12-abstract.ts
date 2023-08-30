import { Animal, Dog } from "./09-protected";

const animal = new Animal('gody');
animal.greeting();

const loca  = new Dog('loca', 'dieguidev');
loca.greeting();
loca.woof(2);

