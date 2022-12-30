import logo from './assest/logo.png';
import polySense from './assest/polysense.png';
import { TiThMenu } from 'react-icons/ti';
import PopUp from './components/PopUp/TextPopUp';
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

      <PopUp />

      <section>
        <img src={polySense} className="polysense" alt="polysense img" />
      </section>
    </>
  );
}

export default App;
