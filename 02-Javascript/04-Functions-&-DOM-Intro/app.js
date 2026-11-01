// // functions

// // built in functions

// // alert() , prompt() , console.log()

// // custom function bhi bana skta hain.

// // alert() // function call krna

// // function greetUser (){
// //     console.log("hello abdullah")
// // }

// // greetUser() // function call krna

// // function reusableFeature() {
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// //   console.log("hello");
// // }

// // reusableFeature()
// // parameter receive krna.

// // function userInfo (username , userage){
// //     console.log("username is " + username);
// //     console.log("user age is " + userage);
// // }

// // userInfo("abdullah" , 23)
// // userInfo("Usman" , 18)

// // argument send krna
// // userInfo()
// // userInfo()
// // userInfo()

// // function shaadiScnz(username, bankBalance, age) {
// //   if (age >= 20) {
// //     console.log("shadi hoskti ha");

// //     if (bankBalance > 1000000) {
// //       console.log(username + " boss appki shaadi pakki ha.");
// //     } else {
// //       console.log(
// //         username +
// //           " amma keh rai hain chat sa chalang maarlongi, istakhara ma naaa aaya ha. Cousin na sota waqt anghoti pehna di",
// //       );
// //     }
// //   } else {
// //     console.log("Aba bhai channa kaah.");
// //   }
// // }

// // // shaadiScnz("abdullah", 150);
// // shaadiScnz("Sohaib", 4000, 20);

// // let username = prompt("enter your name");
// // console.log(username);
// // console.log(prompt("enter your fullname"));

// // function sum(num1 , num2){
// //     console.log(num1 + num2);

// //     return num1 + num2
// // }

// // console.log(sum(10 , 20));

// // let total = sum(20 , 20);
// // console.log(total); // undefined

// // console.log();

// // function ma return ka matlb jaha function call kiya ha waha return hui value ajayegi

// // function checkPositive(number){
// //     if(number < 0){
// //         return "not positive"
// //     } else {
// //         return "positive number"
// //     }
// // }

// // console.log(checkPositive(-20));

// // https://drive.google.com/file/d/10dS3DH6QjpkHKLb9-pASNM74JUccnqjZ/view

// // DOM ==> Document Object Model

// // let value;
// // value = 20;

// // // const value = 20

// // const h1 = document.querySelector("#head");
// // const p = document.querySelector("#para");
// // // console.log(h1);

// // function greetUser (){
// //     h1.innerHTML = "hello abdullah";
// //     p.innerHTML = "only lorem ipsum";
// //     console.log("hello abdullah");
// // }

// const h1 = document.querySelector("#head");
// const p = document.querySelector("#para");

// const input = document.querySelector("#username");
// console.log("input value ==>" , input.value);

// input.value = "abdullah";

// function getInputValue() {
//     console.log(input.value);
//     h1.style.backgroundColor = "red";
//     h1.style.color = "white";

//     h1.innerHTML = "changed through JS"

//     p.style.backgroundColor = "blue";
//     p.style.color = "white";

//     p.innerHTML = "only lorem ipsum changed through JS"
// }

// const inputOne = document.querySelector("#input-one");
// const inputTwo = document.querySelector("#input-two");
// const h3 = document.querySelector("#result");

// function sum() {
//     console.log(+inputOne.value + Number(inputTwo.value));

//     const total = +inputOne.value + Number(inputTwo.value);
//     h3.innerHTML = "Sum of "+ inputOne.value + " and " + inputTwo.value + " is " + total
// }

const p = document.querySelector("#para");
const btn = document.querySelector("#btn");

function hidePara() {
  p.style.display = "none";
  btn.innerHTML = "show para";
}



// https://drive.google.com/file/d/1tae4Sy6wlFj_i6XuszsD0NjgMEdK_83G/view?usp=sharing