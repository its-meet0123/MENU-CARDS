import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pizzamenu.css";
import { pizzaData } from "./Pizzadata.js";

function Menu() {
  return (
    <container-fluid className="pizza-bar">
      <h1 className="text-warning text-center">RAMGHRIA PIZZA HOUSE</h1>
      
      <main className="menu">
      <div className="menu-data">
        <h2 className="text-center" id='our-menu'>OUR MENU</h2>
        <ul className="menu-list">
          {pizzaData.map((pizza) => (
             <Pizza pizzaObj = {pizza} key={pizza.id} />
          ))}
        </ul>
        </div>
      </main>
      
    </container-fluid>
  );
}
export { Menu };

function Pizza(props) {
  return (
    <li className="pizza">
     <div className="img-data" >
        <div className="img">
         <img src={props.pizzaObj.url} alt=""></img>
        </div>
        <div className="data">
         <h3>{props.pizzaObj.name}</h3>
         <p>{props.pizzaObj.ingredients}</p>
         <span>{props.pizzaObj.price}</span>
        </div>
      </div>
    </li>
  );
}
