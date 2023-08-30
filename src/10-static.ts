console.log(Math.PI);
console.log(Math.max(1,2,2,8,1,0));

class  MyMath {
  static readonly PI = 3.14;

  static max (...numbers: number[]) {
    return numbers.reduce((max,item) => max >= item ? max: item);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,2,8,1,0));
const numbers = [1,2,2,8,1,0];
console.log(MyMath.max(...numbers));
console.log(MyMath.max(-1,-9,-8));


