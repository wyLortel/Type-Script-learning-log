let obj1 = {};

let obj2: { name: string } = { name: 'jack' };

let obj3: { name: string; age: number } = { name: 'jack', age: 32 };

let obj4: { name: string; age: number; adult: boolean } = {
  name: 'jack',
  age: 32,
  adult: false,
};

let obj5: { name: string; age: number; adult: boolean; job: undefined } = {
  name: 'jack',
  age: 32,
  adult: false,
  job: undefined,
};

let obj6: { name: string; age: number; adult: boolean; job: null } = {
  name: 'jack',
  age: 32,
  adult: false,
  job: null,
};

let obj7: {
  name: string;
  age: number;
  adult: boolean;
  job: { title: string; view: number };
} = {
  name: 'jack',
  age: 32,
  adult: false,
  job: { title: 'developer', view: 1000 },
};

let obj8: {
  name: string;
  age: number;
  adult: boolean;
  job: { title: string; view: number };
  today: Date;
} = {
  name: 'jack',
  age: 32,
  adult: false,
  job: { title: 'developer', view: 1000 },
  today: new Date(),
};
