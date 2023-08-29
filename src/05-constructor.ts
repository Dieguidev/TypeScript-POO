export class MyDate {


  constructor(
    public year: number = 1993,
    public  month: number = 7,
    private day: number = 9
    ) {}

  printFormat(): string {
    const day = this.addPading(this.day);
    const month = this.addPading(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPading(value: number){
    if(value < 10){
      return `0${value}`;
    }
    return `${value}`;
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day
  }
}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log(myDate3.printFormat());

const myDate4 = new MyDate(2022,3);
console.log(myDate4.printFormat());

