const printUserName = (lastName: string, firstName?: string): string =>
  `${lastName} ${firstName || ''}`.trim();
const result = printUserName('Doe');
console.log(result);

const user: {
  name: string;
  age: number;
  gender?: string;
} = {
  name: 'Alice',
  age: 30,
};

user.gender = 'female';
