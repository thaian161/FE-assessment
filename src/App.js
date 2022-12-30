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
  const [isEditingText, setIsEditingText] = useState(false);
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [isEditingProgress, setIsEditingProgress] = useState(false);

  const startEditingText = () => {
    setIsEditingText(true);
  };
  const stopEditingText = () => {
    setIsEditingText(false);
  };
  const startEditingDate = () => {
    setIsEditingDate(true);
  };
  const stopEditingDate = () => {
    setIsEditingDate(false);
  };
  const startEditingProgress = () => {
    setIsEditingProgress(true);
  };
  const stopEditingProgress = () => {
    setIsEditingProgress(false);
  };

  return (
    <>
      <div className="Nav">
        <img src={logo} className="logo" alt="logo" />
        <TiThMenu className="menu-icon" />
      </div>

      <section className="body">
        {!isEditingText && <button onClick={startEditingText}> Message</button>}
        {isEditingText && <TextPopUp onCancelEditing={stopEditingText} />}

        {!isEditingDate && <button onClick={startEditingDate}> Date </button>}
        {isEditingDate && <DatePopUp onCancelEditing={stopEditingDate} />}

        {!isEditingProgress && (
          <button onClick={startEditingProgress}> Progress </button>
        )}
        {isEditingProgress && (
          <ProgressPopUp onCancelEditing={stopEditingProgress} />
        )}
      </section>

      <section>
        <img src={polySense} className="polysense" alt="polysense img" />
      </section>
    </>
  );
}

export default App;
