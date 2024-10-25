// 1) Promises
// const operation = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("ivan");

// Async/Await
  // async function getTodos() {
  // async function getTodos() {
  //   await fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  //   return data;
  // }
  // const todos = getTodos();

  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log("data", data);
}
const todos = getTodos();
console.log(todos);
