function example(a: string | null) {
  if (typeof a === 'string') return a.toUpperCase();
}

function example1(a: string | null) {
  if (a) return a.toUpperCase();
}

function example2(a: string | null) {
  if (a !== null) return a.toUpperCase();
}

function example3(a: string | null) {
  return a?.toUpperCase();
}

function returnName(obj: {}) {
  if ('name' in obj) return obj.name;
}

const num: unknown = 10.12;
const fixedNum = typeof num === 'number' && num.toFixed(1);

const num2: unknown = 10.12;
const fixedNum2 = <number>num2;

const num3: unknown = 10.12;
const fixedNum3 = (num3 as number).toFixed(1);

function numberFixed(num: number | null) {
  if (num) {
    console.log(num.toFixed(1));
  }

  if (num !== null) {
    console.log(num.toFixed(1));
  }

  console.log(num?.toFixed(1));

  //! null아님 단언 연산자
  console.log(num!.toFixed(1));
}

numberFixed(10.12);

//단언 연산자들은 컴파일러가 단언하는게 아닌 개발자가 단언하는 것이다 <> as ! 등은 개발자가 책임을 진다
//컴파일이 개발자를 믿고 오류를 내지 않는것
