export class MyService {

  static instance: MyService | null = null;

  private constructor(private name: string){}

  getName(){
    return this.name;
  }

  static create(name:string) {
    if(MyService.instance === null) {
      console.log('deberia de entrar una vez');

      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}


// const myService1 = new MyService('service 1');
// console.log(myService1.getName());
// const myService2 = new MyService('service 2');
// console.log(myService2);

// console.log(myService1 === myService2);

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
const myService3 = MyService.create('service 3');
console.log(myService3.getName());