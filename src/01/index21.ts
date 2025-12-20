interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  skill: string;
}

const person: Person = {
  name: 'John',
  age: 20,
};

const developer: Developer = {
  name: 'Sucoding',
  age: 30,
  skill: 'Front Developer',
};

interface Car {
  name: string;
  color: string;
}

interface Bmw extends Car {
  speed: number;
}

const car: Car = {
  name: 'car',
  color: 'red',
};

const bmw: Bmw = {
  name: 'bmw',
  color: 'blue',
  speed: 100,
};

interface Phone {
  name: string;
  color: string;
}

interface Tv extends Phone {
  channel: string;
}

const galaxy: Phone = {
  name: 'galaxy ultra 24',
  color: 'white',
};

const lg: Tv = {
  name: 'LG OLED TV',
  color: 'black',
  channel: '24 channel',
};
