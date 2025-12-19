let a: never;
// a = 10;
// a = true;
// a = "hello";
// a = [];
// a = {};
// a = null;
// a = undefined;

//사용하는 일은 거의 없고 함수 내부에서 예외철를 던질때 never를 사용함
function throwError(message: string): never {
  throw new Error(message);
}

let b: number | string | boolean = 10;
b = true;

let c: { name: string } & { age: number } & { gender?: string };

c = {
  name: 'Alice',
  age: 30,
};
