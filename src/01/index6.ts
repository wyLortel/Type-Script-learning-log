let uname: any = 'Alice';
let age: any = 25;
let isDone: any = false;

let numbers: any[] = [1, 2, 3, 4, 5];
let names: any[] = ['Alice', 'Bob', 'Charlie'];

let person: any = ['Alice', 30];

let user: any = {
  name: 'Alice',
  age: 30,
  isAdmin: false,
};

function greet(person: any): any {
  return `Hello,${person}!`;
}

function add(a: any, b: any): any {
  return a + b;
}

let multiply: (a: any, b: any) => any;
multiply = (a, b) => a * b;
