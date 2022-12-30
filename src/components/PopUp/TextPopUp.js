import './PopUp.css';
import { useEffect, useState } from 'react';
import { MdClear } from 'react-icons/md';

function TextPopUp(props) {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://138.197.166.169/polysense-interview/');
      result.json().then((json) => setMessage(json.text));
    };
    fetchData();
  }, []);

  return (
    <section className="popup-box_container">
      <div className="popup-box">
        <div className="popup-header">
          <h3 className="title"> Message is: </h3>
          <MdClear
            style={{
              color: 'white',
              height: '2.5rem',
              width: '2.5rem',
              cursor: 'pointer',
            }}
            type="button"
            onClick={props.onCancelEditing}
          />
        </div>
        <div className="popup-content"> {message} </div>
      </div>
    </section>
  );
}

export default TextPopUp;
