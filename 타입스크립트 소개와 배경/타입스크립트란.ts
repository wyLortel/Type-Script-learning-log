
//--1
// //자바 스크립트의 경우
// function fetchUser1() {
//     return { name: '캡틴판교' , age:100};
// }

// const user1 = fetchUser1();
// console.log(user1.name);
// console.log(user1.email);  //런타임에러 언덜파인드 




// //타입 스크립트의 경우 
type User = {
    name : String;
    age : number;
};


function fetchUser() : User {
    return { name: '캡틴판교' , age:100};
}

const user = fetchUser();
console.log(user.name);
// // console.log(user.email);/ 정의된 타입과 일차하지 않으면 컴파일이 에러를 낸다 


 //-2
 //자바스크립트의 경우
// function sum(a ,b) {
//     return a+b;
// }

// sum(10,20);
// sum(10,'20'); // 1020 숫자와 문자를 더해 에러발생 하지만 타입스크립트가 저러면 컴파일 단계에서 에러 발생 시킴

//타입 스크립트의 경우

function sum(a:number , b:number){
    return a +b;
}

//보다시피 타입스크립트는 사전의 잘못된 타입 에러를 방지해준다 

//JSDoc 자바스크립트 코드에 주석(Comment)을 달아 타입 정보를 문서처럼 기술하는 표준 방식

// /**
//  * @description 두 수의 합을 구하는 함수
//  * @param {number} a 첫 번째 숫자
//  * @param {number} b 두 번째 숫자
//  */
// function sum(a, b) {
//   return a + b;
// }

//파일 상단에  @ts-check  한 줄을 추가하면 VS Code가 JSDoc 기반 타입 검사를 활성화한다. 타입스크립트처럼 사전에 오류를 감지가능

//하지만 반복적인 코드 작성으로 힘듬 프로젝트가 커질수록 비효율적인 코드가 많아져 결국은 타입스크립트로 가는게 더 유리하다 
