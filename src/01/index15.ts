//반환값의 타입은 매게변수 상관없이 진짜 반환값만 본다 아무것도 저 if문에 해당하지않을 경우도 적어줘야한다
function sum(
  a: number | string,
  b: number | string,
): number | string | undefined {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
  if (typeof a === 'number' && typeof b === 'string') return String(a) + b;
  if (typeof a === 'string' && typeof b === 'number') return a + String(b);
}

console.log(sum(10, 20));
console.log(sum('a', 'b'));

//타입추론으로 자동으로 반환값 찾음
function sum1(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
  if (typeof a === 'number' && typeof b === 'string') return String(a) + b;
  if (typeof a === 'string' && typeof b === 'number') return a + String(b);
}

//마지막 모든수를 반환
function sum2(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
  if (typeof a === 'number' && typeof b === 'string') return String(a) + b;
  if (typeof a === 'string' && typeof b === 'number') return a + String(b);
  return String(a) + String(b);
}

//에러 던지기 never는 다른값이 아닌 에러하나만 나올가능성만 잇을때 사용 나머지는 생략 가능
function sum3(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  if (typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
  if (typeof a === 'number' && typeof b === 'string') return String(a) + b;
  if (typeof a === 'string' && typeof b === 'number') return a + String(b);
  throw new Error('Invaild Parameter Type');
}

console.log(sum(10, 20));
console.log(sum('a', 'b'));
