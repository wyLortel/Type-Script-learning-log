// interface Box {
//   value: number | string | boolean | number[] | { [key: string]: number };
// }

// const numberBox: Box = { value: 1 };
// const stringBox: Box = { value: 'a' };
// const booleanBox: Box = { value: true };
// const arrayBox: Box = { value: [1, 2, 3] };
// const objectBox: Box = { value: { a: 1, b: 2 } };

// interface Box<T> {
//   value: T;
// }

// const numberBox: Box<number> = { value: 1 };
// const stringBox: Box<string> = { value: 'a' };
// const booleanBox: Box<boolean> = { value: true };
// const arrayBox: Box<number[]> = { value: [1, 2, 3] };
// const objectBox: Box<{ a: number; b: number }> = { value: { a: 1, b: 2 } };

interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<number, string> = { first: 1, second: 'hello' };
const pair2: Pair<string, boolean> = { first: 'world', second: true };
const pair3: Pair<number[], boolean[]> = {
  first: [1, 2, 3],
  second: [true, false],
};

type Box<T> = {
  value: T;
};

const numberBox: Box<number> = { value: 1 };
const stringBox: Box<string> = { value: 'a' };
const booleanBox: Box<boolean> = { value: true };
const arrayBox: Box<number[]> = { value: [1, 2, 3] };
const objectBox: Box<{ a: number; b: number }> = { value: { a: 1, b: 2 } };
//인테페이스에서 타입별칭으로 변경해도 똑같음

type Pair2<T, U> = {
  first: T;
  second: U;
};

const pair4: Pair2<number, string> = { first: 1, second: 'hello' };
const pair5: Pair2<string, boolean> = { first: 'world', second: true };
const pair6: Pair2<number[], boolean[]> = {
  first: [1, 2, 3],
  second: [true, false],
};

type Point<T> = T;
const numberPoint: Point<number> = 10;
const stringPoint: Point<string> = ' A';
//타입 과 인터페이스의 차이점은 객체뿐만 아니라 일반타입도 지정가능
