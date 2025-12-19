let str: unknown = 'Hello';
let num: unknown = 42;
let bool: unknown = true;
let und: unknown = undefined;
let nul: unknown = null;
let syn: unknown = Symbol();
let arr: unknown = [1, 2, 3];
let obj: unknown = { name: 'John', age: 30 };
let func: unknown = () => console.log('Hello');

let a: unknown = 'Hello';
let b: unknown = 'world';
let c =
  //typeof와 if를 사용해서 타입을 줄이는 거구나 unknown은 반드시 타입을 좁혀줘야함
  typeof a === 'string' && typeof b === 'string' ? a + b : '문자열이 아니다.';

console.log(c);
