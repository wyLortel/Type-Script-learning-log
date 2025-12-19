function greet(name: string): string;
function greet(name: string, age: number): string;

function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age} years old`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(greet('Alice'));
console.log(greet('Bob', 30));
greet('name', 20);
greet('');

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;

function add(n1: number | string, n2: number | string): number | string {
  if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2;
  else if (typeof n1 === 'string' && typeof n2 === 'string') return n1 + n2;
  throw new Error('Inavalid arguments');
}

const res1 = add('A', 'B');
const res2 = add(10, 20);

console.log(res1);
console.log(res2);

function formatValue(value: string): string;
function formatValue(value: number): number;

function formatValue(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.trim().toUpperCase();
  } else {
    return value;
  }
}

const result1 = formatValue('hello');
const result2 = formatValue(10);

console.log(result1);
console.log(result2);

function processData(value: string): string;
function processData(value: number): number;
function processData(value: boolean): string;

function processData(value: string | number | boolean): string | number {
  if (typeof value === 'string') {
    return `String: ${value}`;
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return value ? 'True' : 'False';
  }
}

const r1 = processData('A');
const r2 = processData(10);
const r3 = processData(true);

console.log(r1);
console.log(r2);
console.log(r3);
