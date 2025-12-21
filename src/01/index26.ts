// function getFirstElements(
//   arr: number[] | string[] | boolean[],
// ): number | undefined | string | boolean {
//   return arr[0];
// }

// getFirstElements([1, 2, 3]);
// getFirstElements(['a', 'b', 'c']);
// getFir stElements([true, false]);

function getFirstElements<T>(arr: T[]): T | undefined {
  return arr[0];
}

getFirstElements([1, 2, 3]); //생략 가능 하지만 제너릭타입을 사용했을때는 개인적으로 명시해두는걸 선호
getFirstElements<string>(['a', 'b', 'c']);
getFirstElements<boolean>([true, false]);

// function identity(
//   arg: number | string | boolean | number[] | { a: number; b: number },
// ): number | string | boolean | number[] | { a: number; b: number } {
//   return arg;
// }

// console.log(identity(1));
// console.log(identity('a'));
// console.log(identity(true));
// console.log(identity([1, 2, 3]));
// console.log(identity({ a: 2, b: 2 }));

// function identity<T>(arg: T): T {
//   return arg;
// }

// console.log(identity<number>(1));
// console.log(identity<string>('a'));
// console.log(identity<boolean>(true));
// console.log(identity<number[]>([1, 2, 3]));
// console.log(identity<{ a: number; b: number }>({ a: 2, b: 2 }));

const identity: <T>(arg: T) => T = <T>(arg: T): T => arg;

console.log(identity<number>(1));
console.log(identity<string>('a'));
console.log(identity<boolean>(true));
console.log(identity<number[]>([1, 2, 3]));
console.log(identity<{ a: number; b: number }>({ a: 2, b: 2 }));

// function combine(
//   a: number | string | boolean | number[] | { a: number; b: number },
//   b: string | number | boolean | string[] | { c: number; d: number },
// ): [
//   number | string | boolean | number[] | { a: number; b: number },
//   string | number | boolean | string[] | { c: number; d: number },
// ] {
//   return [a, b];
// }

// console.log(combine(1, 'a'));
// console.log(combine('a', 1));
// console.log(combine(true, false));
// console.log(combine([1, 2, 3], ['a', 'b', 'c']));
// console.log(combine({ a: 1, b: 2 }, { c: 3, d: 4 }));

function combine<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(combine<number, string>(1, 'a'));
console.log(combine('a', 1));
console.log(combine<boolean, boolean>(true, false));
console.log(combine<number[], string[]>([1, 2, 3], ['a', 'b', 'c']));
console.log(
  combine<{ a: number; b: number }, { c: number; d: number }>(
    { a: 1, b: 2 },
    { c: 3, d: 4 },
  ),
);
//제너릭은 결론은 치완이다 넘겨주는 값을 그대로 제너릭 쪽으로 넘겨준다는것이다

const combine2: <T, U>(a: T, b: U) => [T, U] = (a, b) => [a, b];

function mergeObjects<T, U, V>(obj1: T, obj2: U, obj3: V): T & U & V {
  return { ...obj1, ...obj2, ...obj3 };
}
//반환값을 연결하기에 &를 사용하여 여널

const result = mergeObjects({ name: 'Alice' }, { age: 25 }, { isActive: true });
console.log(result);
