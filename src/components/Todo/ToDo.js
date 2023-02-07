import React from 'react';
import './ToDo.css';
import { useState } from 'react';

function ToDo() {

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  console.log(job)

  const handleSubmit= () => {
    setJobs(prev => [...prev, job]);
    setJob('') // clear input after user hit submit button
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