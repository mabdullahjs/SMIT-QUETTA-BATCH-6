// console.log("hello world");

// for(let i = 0; i < 10; i++){
//     console.log('loop ==> , ' , i)
// }

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Pineapple",
  "Watermelon",
  "Grape",
  "Peach",
  "Pear",
  "Cherry",
  "Kiwi",
  "Papaya",
  "Plum",
  "Pomegranate",
  "Lemon",
  "Coconut",
  "Raspberry",
  "Fig",
];

// console.log(fruits)

// const ol = document.querySelector("ol");

// for(let i = 0; i < fruits.length; i++ ){
//     console.log(fruits[i]);
//     ol.innerHTML += `<li>${fruits[i]}</li>`

// }

// CRUD
// create , read , update , delete

const input = document.querySelector("#input");
const ol = document.querySelector("ol");
const allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `<li>${allTodos[i]}
    <button onclick="deleteTodo(${i})">delete</button>
    <button onclick="editTodo(${i})">edit</button>
    </li>`;
  }
}

function addTodo() {
  //   console.log(input.value);
  allTodos.push(input.value);
  //   console.log(allTodos);

  renderTodo()

  input.value = "";
}

function deleteTodo(index) {
  console.log("delete todo", index, allTodos[index]);
  allTodos.splice(index, 1);

  renderTodo()
}
function editTodo(index) {
  console.log("edit todo", index, allTodos[index]);


  const updatedValue = prompt("enter updated value" , allTodos[index]);

  allTodos.splice(index , 1 , updatedValue)
  renderTodo()
}
