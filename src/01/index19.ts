// const user1: {
//   name: string;
//   age: number;
//   gender: 'male' | 'female';
// } = {
//   name: '철수',
//   age: 20,
//   gender: 'male',
// };

// const user2: {
//   name: string;
//   age: number;
//   gender: 'male' | 'female';
// } = {
//   name: '영희',
//   age: 30,
//   gender: 'female',
// };

// const user3: {
//   name: string;
//   age: number;
//   gender: 'male' | 'female';
// } = {
//   name: '가희',
//   age: 25,
//   gender: 'female',
// };

// interface User {
//   uname: string;
//   age: number;
//   gender: 'male' | 'female';
// }

// const user1: User = {
//   uname: '철수',
//   age: 20,
//   gender: 'male',
// };

// const user2: User = {
//   uname: '영희',
//   age: 30,
//   gender: 'female',
// };

// const user3: User = {
//   uname: '훈이',
//   age: 20,
//   gender: 'male',
// };

// import type { User } from './types/user';

// const u: User = {
//   name: '철수',
//   age: 20,
//   gender: 'female',
// };

interface User {
  name: string;
  age: number;
  readonly gender?: 'male' | 'female';
}

const user1: User = {
  name: '정잔',
  age: 20,
  gender: 'male',
};

user1.name = '영희';
user1.age = 30;
