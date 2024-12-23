import React from "react";

export default function Api(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then((res) => res.json())
//  .then((data) => console.log(data));
 //console.log("jonas");
 async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return data;
 }
 const todos = getTodos();
  console.log(todos);
}


