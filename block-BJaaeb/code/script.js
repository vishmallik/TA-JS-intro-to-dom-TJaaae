/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label, type = "text") {
  // Your code goes here
  let labelElm = document.createElement("label");
  labelElm.innerText = label;
  let inputElm = document.createElement("input");
  labelElm.append(inputElm);
  inputElm.type = type;
  return document.body.append(labelElm);
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
function createInputElm(label, type = "text") {
  // Your code goes here
  let labelElm = document.createElement(`label`);
  labelElm.innerHTML = `${label}<input type=${type}></input>`;
  return document.body.append(labelElm);
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(arr) {
  let ul = document.createElement("ul");
  arr.forEach((ele) => {
    let li = document.createElement("li");
    li.innerText = `${ele}`;
    ul.append(li);
  });
  document.body.append(ul);
}

// // TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(arr) {
  let ul = document.createElement("ul");
  arr.forEach((elm) => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${elm.name}<p> <input type='checkbox' ${
      elm.isDone ? "checked" : ""
    } name="" id =""><span>X</span>`;
    ul.append(li);
  });
  document.body.append(ul);
}

// // TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
