import logo from './assest/logo.png';
import polySense from './assest/polysense.png';
import { TiThMenu } from 'react-icons/ti';
import TextPopUp from './components/PopUp/TextPopUp';
import DatePopUp from './components/PopUp/DatePopUp';
import ProgressPopUp from './components/PopUp/ProgressPopUp';
import './App.css';

// import { useState, useEffect } from 'react';

function App() {
  return (
    <>
      <div className="Nav">
        <img src={logo} className="logo" alt="logo" />
        <TiThMenu className="menu-icon" />
      </div>

      <section className="body">
        <button> Message </button>
        <button> Date </button>
        <button> Progress </button>
      </section>

      <TextPopUp />
      <ProgressPopUp />
      <DatePopUp />

      <section>
        <img src={polySense} className="polysense" alt="polysense img" />
      </section>
    </>
  );
}

export default App;
