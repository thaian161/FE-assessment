import logo from './assest/logo.png';
import polySense from './assest/polysense.png';
import { TiThMenu } from 'react-icons/ti';
import TextPopUp from './components/PopUp/TextPopUp';
import DatePopUp from './components/PopUp/DatePopUp';
import ProgressPopUp from './components/PopUp/ProgressPopUp';
import { useState } from 'react';
import './App.css';

// import { useState, useEffect } from 'react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [showDate, setShowDate] = useState(false);
  return (
    <>
      <div className="Nav">
        <img src={logo} className="logo" alt="logo" />
        <TiThMenu className="menu-icon" />
      </div>

      <section className="body">
        <button onClick={() => setShowMessage(!showMessage)}> Message </button>
        {showMessage ? <TextPopUp /> : null}

        <button onClick={() => setShowProgress(!showDate)}> Date </button>
        {showDate ? <DatePopUp /> : null}

        <button onClick={() => setShowDate(!showProgress)}> Progress </button>
        {showProgress ? <ProgressPopUp /> : null}
      </section>

      <section>
        <img src={polySense} className="polysense" alt="polysense img" />
      </section>
    </>
  );
}

export default App;
