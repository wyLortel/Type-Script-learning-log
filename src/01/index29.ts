interface Car {
  name: string;
  speed(): void;
}
//Partial<t> 기존 필수엿던속성을 모두 선택적 속성으로 변경시킴
type OptionalCar = Partial<Car>;

interface User {
  name: string;
  age: number;
}

interface Guest {
  name?: string;
  age?: number;
}

const user1: User = {
  name: 'james',
  age: 20,
};

const guest1: Guest = {
  //
};

//단지 선택적 타입의 차이때문에 같은 타입인데도 만드는건 비효율적 이럴때 파셜 유틸리티 사용
const guest2: Partial<User> = {
  //
};

//즉 기존의 타입이 존재하는데도 선택적여부 때분에 새로운 타입을 만들어야하는경우
//유용하게 사용
