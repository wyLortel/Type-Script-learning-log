type Email = string;
type Password = string;

let e: Email = 'john@gmail.com';
let p: Password = '1234@';
//그냥 평범히 타입을 할당해도 좋지만 이렇게 하는쪽이 좀더 해당변수에 어떤 값을
//할당하려고 하는지 의미를 명확하게 전달할수있다

let e1: Email = 'chanwoo.cm';
let p1: Password = '1234@';
//또 타입별칭도 재사용가능 그리고 유지보수또한 쉬워짐 타입별칭으로 정의해둔 타입 하나면
//변경하면 다른 타입들도 바뀜으로

// interface Person {
//   name: string;
//   age: number;
//   gender: 'male' | 'female';
// }

type Person = {
  readonly name: string;
  age: number;
  gender?: 'male' | 'female';
};

let person: Person = {
  name: 'John',
  age: 30,
};

interface Add {
  (n1: number, n2: number): number;
}

type Add1 = (n1: number, n2: number) => number;

const add: Add = (n1, n2) => (n1 = n2);

interface User {
  [key: string]: string;
}

type User1 = {
  [key: string]: string;
};

let Person: User = {
  name: 'john',
  gender: 'male',
  address: 'Seoul',
};
