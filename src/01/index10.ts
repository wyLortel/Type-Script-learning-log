function add(n1: number, n2: number) {
  return n1 + n2;
}

let gender: 'male' | 'female' = 'male';
gender = 'female';

let user: { name: '철수' };

// user = { name: '유리' };
user = { name: '철수' };

const num = 10;

const nums = [10, 20];
const user2 = {
  name: 'Alice',
};

user2.name = 'Bob';

let a;

function add2(n1 = 0, n2 = 0) {
  return n1 + n2;
}
