let user: {
  name: string;
  age: number;
  getName?: () => string;
} = {
  name: '찬우',
  age: 5,
  getName() {
    return this.name;
  },
};

//그럼 전부 옵셔널 속성을 주는게 좋지않냐?
//근데 그럼 타입 안정성이 떨어짐
//타입안전성은 타입일관성과 올바름을 유지하여 타입 관련 오류를 최소화하는것

function greet(user: { name: string; age?: number }) {
  console.log(`Hello ${user.name}`);
  console.log(`You are ${user.age}years old`);
}

greet({
  name: '함수',
});
//이경우 age가 undefined가 나옴 타입스크립트는 타입에 안전성만 체크
//그래서 이런 경우 처럼 예상치못한결과가 나와 타입 안전성이 떨어 질수잇어 주의 해서 사용해야함

let user1: {
  name: string;
  readonly age: number; //readonly를 붙여줌으로서 객체 속성의 변경을 막음
} = {
  name: '철수',
  age: 20,
};

user1.name = '찬우';
// user1.age = 30; 오류!
console.log(user);
//객체 타입을 지정할떄 수정 불가능한 속성을 만들고 싶으면 타입쪽에 리드온니를 붙여줌
