interface User {
  name: string;
  age: number;
  gender: string;
}

type NewUser = Omit<User, 'gender'>; //젠더라는 속성 빼고 모든 타입을 다가져와 새로운 타입 생성

type NewUser2 = Omit<User, 'gender' | 'age'>; //유니온타입쓰면 연결되서 둘다 뺴짐

// type NewUser = {
//     name: string;
//     age: number;
// }

// type NewUser2 = {
//     name: string;
// }
