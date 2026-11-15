// console.log("hello world");

// ++ === +1
// post increment / pre increment
// let num = 10;
// console.log(num++)
// console.log(++num)

// let num = 10;
// // console.log(num++ + num++ + ++num);
// // console.log( 10 + 11 + 13);

// console.log(num++ + ++num + ++num + num++ + num++);
// console.log(10 + 12 + 13 + 13 + 14);

// 10 + 12 + 13 + 13 + 14

// 10 + 11 + 13

// for , while , do while

// initialization
// condition
// increment / decrement
// i == index

// let username = "Muhammad Abdullah";
// let email = "abdullah@gmail.com";
// let age = 23;
// let isLoggedIn = true;

// console.log("username is " + username + " and email is " + email + " and age is " + age + " and isLoggedIn is " + isLoggedIn);

// console.log(`username is ${username} and email is ${email} and age is ${age} and is LoggedIn is ${isLoggedIn}`);

// for(let i = 1; i <= 10; i++){
//     console.log('hello world ' , i)
// }

// const input = document.querySelector("#table");
// const div = document.querySelector("#result");

// function createTable() {
//     div.innerHTML = ""

//     for (let i = 1; i <= 10; i++) {
//     console.log(`${input.value} x ${i} = ${+input.value * i}`);

//     div.innerHTML += `<li>${input.value} x ${i} = ${+input.value * i}</li>`;

//   }
// }

// console.log("console before loop");

// for (let i = 1; i <= 10; i++) {
//   console.log("hello world ", i);
// }
// console.log("console after loop");





// nested loop


// for(let i = 1; i <= 10; i++){
//     console.log("parent loop " , i);

//     for(let j = 1; j <= 5; j++){
//         console.log("inner loop " , j);
        
//     }
    
// }




// for(let i = 1; i <= 1000; i++){
//     console.log("Table of " , i);

//     for(let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
        
//     }
    
// }


// for(let i = 1; i <= 10; i++){
//     console.log("parent loop " , i);
// }


// let i = 1;
// while(i < 0){
//     console.log("hello world " , i);
//     i++
// }


// let i = 11;
// do {
//     console.log("hello world " , i);
//     i++
// } while(i < 10);


// infinite loop

// let i = 1;
// while(i > 0){
//     console.log("hello world " , i);
//     i++
// }




// array loop , do while , while loop , infinite loop

// nested

// let arr = [1 , 2, 3 , [4 , [5 , [6]]]]
// console.log(arr[3][1][1][0]);

const ul = document.querySelector("#result");

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Watermelon",
  "Papaya",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Cherry",
  "Peach",
  "Pear",
  "Plum",
  "Apricot",
  "Kiwi",
  "Guava",
  "Pomegranate",
  "Lemon",
  "Lime",
  "Coconut",
  "Avocado",
  "Dragon Fruit",
  "Passion Fruit",
  "Jackfruit",
  "Lychee",
  "Fig",
  "Date",
  "Melon",
  "Cantaloupe",
  "Cranberry",
  "Gooseberry",
  "Tangerine",
  "Mandarin",
  "Grapefruit",
  "Persimmon",
  "Mulberry",
  "Star Fruit",
  "Durian",
  "Longan",
  "Rambutan",
  "Quince",
  "Nectarine",
  "Olive",
  "Kumquat",
  "Soursop",
  "Custard Apple",
  "Jujube"
];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i] , i);
    ul.innerHTML += `<li>${fruits[i]}</li>`;
}

const students = ["Ali", "Ahmed", "Sara", "Ayesha", "Usman"];

const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

const countries = ["Pakistan", "India", "Japan", "Turkey", "Canada"];

const cars = ["Toyota", "Honda", "BMW", "Audi", "Suzuki"];

const languages = ["JavaScript", "Python", "Java", "C++", "PHP"];

const animals = ["Lion", "Tiger", "Elephant", "Cat", "Dog"];

const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

const subjects = ["Math", "English", "Science", "Computer", "History"];

const movies = ["Avatar", "Titanic", "Inception", "Interstellar", "Joker"];