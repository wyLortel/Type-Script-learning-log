interface Car {
  name: string;
  speed(): void;
}

//안봐도 객체 전부를 읽기 전용으로 만들어주는거인듯
type Required = Readonly<Car>;

// type Required = {
//     readonly name: string;
//     readonly speed: () => void;
// }

interface User {
  name: string;
  age: number;
  address?: string;
}

const user: Readonly<User> = {
  name: 'james',
  age: 20,
};

// user.name = 'asd'; 변경불가 타입에러 발생
//즉 일시적으로 읽기전용으로 하고싶을때 유용하게 사용

type User2 = Record<string, string>; //객체의 키가 문자열이고 값이 문자열이면 모두 허용

// type User2 = {
//     [x: string]: string;
// } 인덱스 시그니처와 같은 형태

const user2: User2 = {
  name: 'asd',
  gender: 'male',
};

type User3 = Record<'name' | 'gender', string | number>; //리터럴객체를 쓰면 식별함

const user3: User3 = {
  name: 'asd',
  gender: 1,
  // address: 'Asdas', 레코드 키값에 리터럴 객체로 지정 안해줘서 오류
};
