type Gender = 'male' | 'female';

interface Person {
  name: string;
  age: number;
  gender: Gender;
}

const person1: Person = {
  name: 'John',
  age: 20,
  gender: 'female',
};

//이렇게 사용함으로 의미가 생기고 재사용 가능 변경에 강함등의 효과가 생긴다

// interface Animal {
//   name: string;
//   age: number;
// }

// type Sound = 'bark' | 'meow' | 'chirp';

// interface Pet extends Animal {
//   sound: Sound;
// }

// const dog: Pet = {
//   name: 'Buddy',
//   age: 5,
//   sound: 'bark',
// };

type MathOperation = (a: number, b: number) => number;

interface Calculator {
  add: MathOperation;
  subtract: MathOperation; //재사용 가능
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));

type Sound = 'bark' | 'meow' | 'chirp';
interface Animal {
  name: string;
  age: number;
}

interface Pet extends Animal {
  sound: Sound;
}

interface wildAnimal extends Animal {
  sound: Sound;
  dangerLevel: number;
}

function processAnimalSound(sound: Sound) {
  //....
}

const dog: Pet = {
  name: 'Buddy',
  age: 5,
  sound: 'bark',
};

interface Dog {
  breed: string;
  bark(): void;
}

interface Cat {
  breed: string;
  meow(): void;
}

type Pet2 = Dog | Cat;

interface BasicAddress {
  street: string;
  city: string;
}

type FullAddress = BasicAddress & {
  country: string;
  zipCode: string;
};

const myAddress: FullAddress = {
  street: 'ga',
  city: 'Seoul',
  country: 'Korea',
  zipCode: '131232',
};
