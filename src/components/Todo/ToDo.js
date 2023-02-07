import React from 'react';
import './ToDo.css';
import { useState } from 'react';

function ToDo() {
  const storageJobs = localStorage.getItem('jobs') //this is JSON format, we need to parse it so the data type returns back to array - use JSON.parse(storageJobs)

  const parseJobs = JSON.parse(storageJobs)

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(parseJobs ?? []);// if parseJobs is null/undefined, react will use the []
  console.log(job)

  const handleSubmit= () => {
    setJobs(prev => {
      const newJobs = [...prev,job]

      //save to local storage - check in Application > local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs)
      console.log(jsonJobs)

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