import React,{ useEffect, useState } from 'react'
import Course from "./Course"
import base_url from './api/Bootapi';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Allcourses = () => {
  
 //FUNCTION TO CALL SERVER

 const getAllCoursesFromServer = () => {
  axios.get(`${base_url}/courses`)
    .then((response) => {
      // Handle success
      console.log(response.data); 
      toast.success("courses has been loaded")
      setCourses(response.data);
      // You can update the state with the response data here
      // Example: setCourses(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.log(error);
      toast.error("Something went wrong")
    });
};

useEffect(() => {
  getAllCoursesFromServer();
}, []);

const updateCoursesById=(id)=>{
setCourses(courses.filter((c)=>c.id!=id));

};




 
 
 
    const [courses,setCourses]=useState([
        {id: 1, title:"Java Course",description:"This is demo Course"},
        {id: 2, title:"Django Course",description:"This is demo Course"},
        {id: 3, title:"Python Course",description:"This is demo Course"},
        {id: 4, title:"Angular Course",description:"This is demo Course"}


    ]);
     
    useEffect(()=>{
      alert("Loading....");
      document.title="All Courses"
    },[]);
  return (
    <>
    <div>
        <h1>All Invoices</h1>
       
        {
            // courses.length>0?
            // courses.map((item) => { return <Course key={item.id} course={item} /> })
            // :"No courses"
            courses.length > 0
              ? courses.map((item) => <Course key={item.id} course={item} update={updateCoursesById} />)
              : "No courses"
             
            
        }
        
    </div>
    </>
  )
}

export default Allcourses