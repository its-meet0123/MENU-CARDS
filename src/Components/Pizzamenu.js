import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pizzamenu.css";
import { pizzaData } from "./Pizzadata.js";

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <><container-fluid className="pizza-bar">
      <h1 className="text-warning " id="name-pizzabar">RAMGHRIA PIZZA HOUSE</h1>
      <div className="values">
        <main className="menu">
          <div className="menu-data">
           <h2 className="text-center" id='our-menu'>OUR MENU</h2>
           {/* <ul className="menu-list">
           {pizzaData.map((pizza) => (
           <Pizza pizzaObj = {pizza} key={pizza.id} />
           ))}
           </ul> */}
            {numPizzas > 0 && (
            <ul className="menu-list">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
           )}
          </div>
        </main>
        <Footer />
      </div>
     </container-fluid>
    </>
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

function Footer(){
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return(
    <footer className="footer">{isOpen && 
    <div className="order">
      <p className="text-secondary" id="name">We're <b>open</b> until {closeHour}:00.</p>
      <button type="button" className="btn btn-warning">Order</button>
      </div>
      }
      </footer>
  )
}
