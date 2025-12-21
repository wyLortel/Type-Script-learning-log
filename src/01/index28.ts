interface Animal {
  name: string;
}

interface Dog extends Animal {
  speak(): void;
}

const myDog: Dog = {
  name: '차누',
  speak() {
    console.log(`${this.name} 멍멍`);
  },
};

myDog.speak();

// function identity<T extends { name: string }>(arg: T): string {
//   return arg.name;
// }

// //즉 t는 아무타입이나 될수잇지만 최소한 { name: string }를 보유하고잇어야한다
// // console.log(identity([1, 2, 3])); 타입제약으로 네임속성(스트링타입을 가진)게 없으면 오류
// console.log(identity({ name: '서정진' }));

interface Nameable {
  name: string;
}

interface Ageable {
  age: number;
}

function identity<T extends Nameable | Ageable>(arg: T): string {
  if ('name' in arg) {
    return arg.name;
  }
  throw new Error('error');
}

console.log(identity({ name: '서정진' }));

function identity2<T extends Nameable & Ageable>(arg: T): string {
  return arg.name;
}

console.log(identity2({ name: '정우영', age: 20, gender: 'male' }));

type IsString<T> = T extends 'A' ? true : false;

const IsString1: IsString<'A'> = true; //트루만 올수있음
const IsString2: IsString<'Ab'> = false; //만족하지않앗기에 펄스 올수잇음

interface Nameable2 {
  name: string;
}

interface Ageable2 {
  age: number;
}

type conditionInterface<T> = T extends { name: string } ? Nameable2 : Ageable2;

const person1: conditionInterface<{ name: 'james' }> = { name: 'james' };
const person2: conditionInterface<10> = {
  age: 30,
};

// type ExtractType<T> = T extends number[] ? number : T;
// type A = ExtractType<[1, 2, 3]>;
// type B = ExtractType<'a'>;
// type C = ExtractType<['a', 'b', 'c']>;

type ExtractType<T> = T extends (infer U)[] ? U : T;
type A = ExtractType<[1, 2, 3]>;
type B = ExtractType<'a'>;
type C = ExtractType<['a', 'b', 'c']>;
type D = ExtractType<[true, false]>;

// 배열이든 객체든,
// 그 안에 들어 있는 원래 본 타입을 뽑아내서
// 그걸 기준으로 타입 로직을 마음대로 적용하려는 것 원본이 잇으면 그것도 할수잇고 배열을 붙이면 붙일수잇으니
//infer을 사용함으로서 특정 조건이 맞을때 타입을 추론할수잇음 타입스크립트가 추론하는 타입을 우리가 그대로 가져올수있음

const arr = [1, 'hello']; //const arr: (string | number | boolean)[] 현 시점 타입스크립트 추론

// type E1 = number | boolean | string; 이렇게 일일히 적어주면 위에 수정하면 다수정해야함

type E1<T> = T extends (infer U)[] ? U : never; //이러면 타입스크립트가 배열 앞에 타입을 추론

const element: E1<typeof arr> = 'h1';
