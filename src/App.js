import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu, } from './Components/Pizzamenu';
import { ProfileCard } from './Components/ProfileCard';



function App() {
      return (
        <>
        <h2 className='text-danger'>1.ELEMENT</h2>
        <Menu />
        {/* <h2 className='text-danger'>2.ELEMENT</h2>
        <ProfileCard  name = 'SATNAME SINGH'/> */}
        </>
      );
  }


export default App;