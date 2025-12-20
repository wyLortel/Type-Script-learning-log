interface User {
  name: string;
  age: number;
}

interface Log {
  log(message: string): void;
}

//인터페이스도 다중상속이 가능하다 ,로 구분하고 몇개던 다중상속 가능

interface UserWithLogging extends User, Log {}

const user: UserWithLogging = {
  name: 'John',
  age: 20,
  log(message: string) {
    console.log(message);
  },
};

interface vehicle {
  brand: string;
  year?: number;
}

interface Car extends vehicle {
  wheels: number;
}

const car1: Car = {
  brand: 'Bmw',
  wheels: 4,
};

interface User {
  name: string;
  age: number;
}

interface Person {
  readonly name: string;
  age: number;
}

let user2: User = {
  name: '철수',
  age: 20,
};

let person: Person = {
  name: '영희',
  age: 30,
};

user2 = person;
person = user2;
//키와 값 타입이 전부 일치하면 타입이 일치하다 판단 이게 구조적 타이핑
//근데 완전 일치해야함 옵셔널 속성이 붙어도 오류 (다른 형태로 인식)
//리드온니는 읽기 형식으로만 되서 ㄱㅊ

let num: number = 10;
let str: string = 'A';

interface User2 {
  name: string;
  age: number;
}

function greet(person: User2) {
  console.log(`Hello, ${person.name}`);
}

const user1 = { name: 'Alice', age: 24 };
greet(user1);

//이것또한 마찬가지 객체의 형태가 달라도 키와 값의 타입이 일치하니 타입의 출처가달라도
//타입체크 통과
