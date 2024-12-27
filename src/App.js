import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, } from './Components/Pizzamenu';
import { ProfileCard } from './Components/ProfileCard';
import { Steper } from './Components/Threesteps.js';
import { Card } from 'react-bootstrap';



function App() {
      return (
        <div className='components'>
        <h2 className='text-danger'>1.ELEMENT</h2>
        <Menu />
        <br/>
        <h2 className='text-danger'>2.ELEMENT</h2>
        <ProfileCard  name = 'NAVEEN GARG' key = {Card.name}/>
        <br/>
        <h2>3.ELEMENT</h2>
        <Steper />
        </div>
      );
  }


export default App;