import React from 'react';
import './ToDo.css';
import { useState } from 'react';

function ToDo() {
  const storageJobs = localStorage.getItem('jobs') //this is JSON format, we need to parse it so the data type returns back to array - use JSON.parse(storageJobs)

  console.log(JSON.parse(storageJobs))

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  console.log(job)

  const handleSubmit= () => {
    setJobs(prev => {
      const newJobs = [...prev,job]

      //save to local storage - check in Application > local storage
      const jsonJobs = JSON.stringify(newJobs)
      console.log(jsonJobs)
      localStorage.setItem("jobs", jsonJobs)

      return newJobs
    } );
    setJob('') // clear input after user hit submit button

    console.log(jobs)
  }

  return (
    <div className='todo-wrapper'>
      <input 
        className='input-todo'
        value = {job}
        onChange = { e => setJob(e.target.value) }/>
      <button
        className='add-todo-btn'
        onClick={handleSubmit} >
          Add to To-do List
      </button>
      <ul>
        {jobs.map((job, index)=>(
          <li key={index}> {job} </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDo