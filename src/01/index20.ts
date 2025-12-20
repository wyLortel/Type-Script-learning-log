// const add: (n1: number, n2: number) => number = function add(n1, n2) {
//   return n1 + n2;
// };

interface Add {
  (n1: number, n2: number): number;
}

const add: Add = function add(n1, n2) {
  return n1 + n2;
};

interface Greet {
  (name: string): string;
}

const greet: Greet = (name) => `Hello, ${name}`;

interface User {
  [key: string]: string | number;
}

const user1: User = {
  name: '찬우',
  gender: 'male',
  address: '찬우123@naver.com',
  특기: '남을 괴롭히는게 특기',
  age: 10,
};

interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  특기: string;
}

let User: User = {
  name: '정진', //인터페이스가 같은게 병합되엇으면 반드시 다 적어야하나봄
  age: 12,
  특기: '아직 어떤 사람인지 파악중 ',
};

//같은 이름을 가진 인터 페이스는 내부적으로 병합을 거침 몇개든 상관없이 병합 가능 위치와 상관도 없음
//그래서 뜻하지않는 병합이 일어날수잇으니 주의
