import './PopUp.css';
import { useEffect, useState } from 'react';
import { MdClear } from 'react-icons/md';

function DatePopUp(props) {
  const [date, setDate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://138.197.166.169/polysense-interview/');
      result.json().then((json) => {
        const dateString = json.time;
        const date = new Date(dateString);
        const dataDate = date.toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });
        setDate(dataDate);
      });
    };
    fetchData();
  }, []);

  return (
    <section className="popup-box_container">
      <div className="popup-box">
        <div className="popup-header">
          <h3 className="title"> The Date is: </h3>
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
        <div className="popup-content">{date}</div>
      </div>
    </section>
  );
}

export default DatePopUp;

// const dataDate = date.toLocaleString('en-US', {
//   month: 'short',
//   day: 'numeric',
//   year: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
// });
