import { useState,useEffect } from 'react'
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://www.course-api.com/react-tabs-project';
function App() {

    const [loading,setLoading] = useState(true);
    const [jobs,setJobs] = useState([])
    const [value,setValue] = useState(0);

    const fetchJobs = async() => {
      const reponse = await fetch(url)
      const newJobs = await reponse.json()
      // console.log(newJobs);
      setJobs(newJobs)
      setLoading(false)
    }
    useEffect(() => {
      fetchJobs()
      },[])
      
      if(loading){
        return(
          <div className="flex justify-center items-center h-screen">
        <div className='h-10 rounded-full border-blue-500 border-4 w-10 border-t-white animate-spin '>
          
        </div>
        </div>
      )
      }
    const { company, dates, duties, title } = jobs[value]
    // console.log(company);
  
    return (
    <>
      <section className='h-screen bg-cyan-50 flex flex-col justify-center items-center'>
      <div className="title-container m-8">
      <h1 className='font-bold text-4xl underline decoration-blue-600'>
        Experience
      </h1>
      </div>
      <div className="job h-[40vh] md:flex justify-start p-5 gap-5 w-[50vw]">

      <div className="job-btn gap-3 items-center justify-center flex md:flex-col md:justify-start font-light cursor-pointer p-2 tracking-widest">
        {jobs.map((job,index)=>{
          return (
            <button key={job.id}
            onClick={()=>setValue(index)}
            className={`font-semibold hover:text-blue-600 d text-2xl pl-4 transition-all duration-500 ${value==index && ' border-l-blue-600  border-l-4 text-blue-600'}`}>
              {job.company}
            </button>
          )
          })}
      </div>
      <div className="jobs-info">
        <div className="jobTitle text-xl md:mt-3 tracking-wider">{title}</div>
        <button className="company bg-slate-200 my-3 rounded-md p-2">{company}</button>
        <div className="dates">{dates}</div>
        {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc grid grid-flow-col gap-3">
                <FaAngleDoubleRight className="job-icon mt-3 text-blue-600"></FaAngleDoubleRight>
                <p className='m-2'>{duty}</p>
              </div>
            )
          })}
      </div>
        </div>

      </section>
    </>
  )
}

export default App
