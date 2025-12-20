const add: { (n1: number, n2: number): number } = function add(n1, n2) {
  return n1 + n2;
};

console.log(add(10, 20));

const greet: { (name: string): string } = (name) => `Hello ${name}`;
console.log(greet('철수'));

//객체 타입으로도 함수 시그니처를 작성할수잇다 하지만 일반적이진않다

let user: {
  name: string;
  gender: string;
  address: string;
} = {
  name: '철수',
  gender: 'male',
  address: 'seoul',
};

//인덱스 시그니처
let user1: {
  [key: string]: string | number; //키가 문자열이고 값이 문자열인건 전부 받음 유니온도 사용가능
} = {
  name: '철수',
  gender: 'male',
  address: 'seoul',
};
//단 타입과 일치하지않으면 에러 발생

let user2: {
  [key: string]: string | number | (() => string); //
} = {
  name: '철수',
  gender: 'male',
  address: 'seoul',
  printHello() {
    return 'Hello';
  },
};

interface Person {
  [key: string]: string | (() => string);
}

const person: Person = {
  name: 'John',

  // printName() {
  //   return this.name; 타입스크립트 입장에서는 문자열이나 함수일수있기에 오류냄
  // },
};

interface Person1 {
  name: string;
  [key: string]: string | (() => string);
}

const person1: Person1 = {
  name: 'John',

  printName() {
    return this.name;
  },
};

// person1.printName(); 마찬가지로 문자열일수도 잇다고 유니온으로 해놧는데 함수처럼 써서
//타입스크립트가 확신이 없음

interface Person2 {
  name: string;
  printName: () => string;
}

const person2: Person2 = {
  name: 'John',

  printName() {
    return this.name;
  },
};

//자유도가 높으면 편하지만 타입 안전성이 떨어질수잇어서 주의 가필요한것같음
