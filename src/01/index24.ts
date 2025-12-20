// interface Person {
//   name: string;
// }

// interface Person {
//   age: number;
// }

// const person1: Person = {
//   name: 'John',
//   age: 20,
// };

// interface Person {
//   name: string;
//   age: number;
// }

// interface Developer extends Person {
//   skill: string;
// }

// const dev1: Developer = {
//   name: 'john',
//   age: 20,
//   skill: 'Vue',
// };

// type User = {
//   name: string;
// };

// type User = {
//   age: number;
// };

//타입 별칭은 인터페이스와 다르게 병합 불가 그리고 익스텐드도 지원하지않음

type Name = {
  name: string;
};

type Age = {
  age: number;
};

type User = Name & Age; //이런식으로 병합한것처럼 가능은 함

const person1: User = {
  //잘 작동하는걸 볼수잇음
  name: '우영',
  age: 20,
};

type Animal = {
  name: string;
  age: number;
};

type Dog = Animal & {
  //상속한것같은 느낌
  gender: string;
};

const pet1: Dog = {
  name: 'Mike',
  age: 10,
  gender: 'female',
};
