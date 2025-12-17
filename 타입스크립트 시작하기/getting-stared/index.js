"use strict";
// function sum(a: number , b: number) : number {
//     return a + b;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(sum(10,20));
// var name = `captaon`;
let userName = `captain`;
var name1 = `captain`;
var age = 100;
var isLogin = false;
var hero = { name: 'captain', age: 100 };
var compaines = ["네이버", "삼성", "인프런"];
//or
var compaines2 = ["네이버", "삼성", "인프런"];
var items = ["hi", 11];
var myName = `캡틴`;
var myName1 = 100;
var age1 = 21;
var empty = null;
var nothingAssigend;
//타입스크립트 함수 아규먼트로 이걸 받고 반환값으로 이걸 반환한다ㅣ 
function sayHi(word) {
    return word;
}
//원래 자바스크립트는 인자값 갯수가 안맞아도 그냥 무시하고 반환함 없는값은 무시
//하지만 타입 스크립트는 인자값 다르면 오류 발생시킴
function sayName(firstName, lastName) {
    return 'my name : ' + firstName + lastName;
}
sayName('captain', "page");
//? 를 붙이면 선택적이 되므로 무조건 인자값을 안넘겨 주어도 됨
function sayMyName(firstName, lastName) {
    return "my name" + firstName + lastName;
}
sayMyName('captain'); //오류 안남 자동으로 undefined가 들감
//# sourceMappingURL=index.js.map