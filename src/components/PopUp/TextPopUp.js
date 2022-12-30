import React from 'react';
import { useEffect, useState } from 'react';

function PopUp() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://138.197.166.169/polysense-interview/');
      result.json().then((json) => setMessage(json.text));
    };
    fetchData();
  }, []);

  return (
    <>
      <div> Message </div>
      <div> {message} </div>
    </>
  );
}

export default PopUp;
