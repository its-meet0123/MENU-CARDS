import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pizzamenu.css";
import { pizzaData } from "./Pizzadata.js";

function Menu() {
  return (
    <container-fluid className="Pizza bar">
      <h1 className="text-warning text-center">RAMGHRIA PIZZA HOUSE</h1>
      <main className="menu">
        <h2>OUR MENU</h2>
        <ul>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj = {pizza} key={pizza.id} />
          ))}
        </ul>
      </main>
    </container-fluid>
  );
}
export { Menu };

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={require(`${props.pizzaObj.url}`)} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
