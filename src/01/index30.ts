interface Car {
  name?: string;
  speed?(): void;
}

type RequiredCar = Required<Car>; //그 아까 펄티셜인가 그거랑 반대로 모든게 다 필수가 됨

//주소가 필수가 아니여도 이렇게 가능
interface User {
  name: string;
  age: number;
  address?: string;
}

const user: User = {
  name: 'james',
  age: 20,
};

//근데 저상황이지만 만들지않고 주소를 필수로 만들어야할때가 잇음 반드시 주소도 받아야할때
const orderUser: Required<User> = {
  name: '우영',
  age: 12,
  address: '대전', //어드레스 안쓰면 오류
};
