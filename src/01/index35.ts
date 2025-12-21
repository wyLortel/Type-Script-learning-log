type T = 'a' | 'b' | 'c';
type U = 'a' | 'b';
type V = 'd';

type NewType = Extract<T, U>;
//반대로 교집합만 사용해서 새로운 타입을 만듬
// type NewType = "a" | "b"

type NewType2 = Extract<T, V>;
//단 교집합을 못찾으면 never타입을 반환

type TT = number[] | string[] | boolean[];
type UU = number[] | string[];
type NewType3 = Extract<TT, UU>;
//type NewType3 = number[] | string[] 공통부분만 추출

type TTT = { name: string } | { age: number } | { gender: 'female' };
type YYY = { name: string };
type NewType4 = Extract<TTT, YYY>;

// type NewType4 = {
//     name: string;
// }

type Status = 'active' | 'inactive' | 'pending' | 'disable';
type ActiveStatus = Extract<Status, 'inactive'>;
//type ActiveStatus = "inactive"

type User = {
  name: string;
  age: number;
  gender: boolean;
};

type UserG = {
  name: string;
  age: number;
};

type NewUser = Extract<User, UserG>;
// type NewUser = {
//     name: string;
//     age: number;
//     gender: boolean;
// }

//유니온이 아니기에 분해를 안하고 T extends U 한 번만 검사해서 통과하면 T, 실패하면 never 반환”
