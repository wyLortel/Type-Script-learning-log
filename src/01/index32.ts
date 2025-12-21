interface User {
  name: string;
  age: number;
  gender: string;
}

type NewUser = Pick<User, 'name'>; //유저인터페이스에서 네임이라는 속성을 뽑아와 새로운타입으로 만듬
type NewUse2 = Pick<User, 'name' | 'age'>;

// type NewUser = {
//     name: string;
// }

// type NewUse2 = {
//     name: string;
//     age: number;
// }
