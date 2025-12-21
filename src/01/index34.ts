type T = 'a' | 'b' | 'c';
type U = 'a' | 'b';
type NewType = Exclude<T, U>; //티와 유의 공통 타입을 제거하고 남은 타입으로 새로운 타입 생성
// type NewType = "c"

//만약 공통된 타입이 없으면 무조건 첫번째 타입 반환
type E = 'a' | 'b' | 'c';
type V = 'D';
type NewType2 = Exclude<E, V>;
// type NewType2 = "a" | "b" | "c"

type TT = number[] | string[] | boolean;
type UU = number[] | string[];
type NewType3 = Exclude<TT, UU>;
// type NewType3 = boolean 불리언만 남음

type TTT = { name: string } | { age: number } | { gender: 'female' };
type UUU = { name: string };
type NewType4 = Exclude<TTT, UUU>; //이경우도 네임만 공통이기에 age gender로 새타입 생성

type Status = 'active' | 'inactive' | 'pending' | 'disabled';
type ActiveStatus = Exclude<Status, 'inactive' | 'pending' | 'disabled'>;

type User = {
  name: string;
  age: number;
};

type UserG = {
  name: string;
  age: number;
  gender: boolean;
};

type NewUser = Exclude<User, UserG>;
//이건 왜 안되냐 속성이 다르다 | 이런걸 쓰지않아 속성이 아니라 첫번째를 그대로 반환한다
//유니온일때만 쪼개진다
