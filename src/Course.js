import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";
import base_url from "./api/Bootapi";
import UpdateCourse from "./UpdateCourse";
const Course = ({ course,update }) => {

  


 

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`)
      .then((response) => {
        toast.success("course deleted...")
        update(id);
      }).catch((error)=>
    {
      console.log(error)
      toast.error("course not deleted !! Server problem")
    })
  };
  const Navigate=useNavigate();

  const updateCourse = (id,title,description) => {
    
     console.log(id); // Move the console.log here
 
    Navigate(`/update-course/${id}`);
    // Navigate(`/update-course/${id}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`);
  
   
  };



 

  
  

  return (
    <>
    {/* <Routes>
    
   
   

  </Routes> */}
    {/* <Card className="text-center">
      <CardBody>
         <CardSubtitle className="fw-bold">{course.title} </CardSubtitle>
        <CardText>{course.description}</CardText>
        <CardText>{course.customerName}</CardText>
        <CardText>{course.totalAmount}</CardText>

        



        <Container className="text-center">
          <Button
            color="danger"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Button color="warning" className="m-3" onClick={()=>{
            // updateCourse(course.id);
             updateCourse(course.id, course.title, course.description)
          }}>
            Update
          </Button>
        </Container>
      </CardBody>
    </Card> */}


<Card className="text-center">
  <CardBody>
    <center>
      <h1>Invoice</h1>
      <table className="sbi" style={{ boxShadow: "2px 3px 4px rgba(0, 0, 0, 0.1)", borderCollapse: "collapse", width: "100%" }}>
        <tr>
          <td colspan="2" style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
           <img src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIcYLuuJpNudXJIf3wWb3qdPWkBaT0HgzMg&s" alt="sbi" height="100px" width="100px" />
        
            <b style={{ marginLeft: "10px" }}>FORTIS HOSPITAL</b>
          </td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>INVOICE ID:</td>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>{course.id}</td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>INVOICE DATE:</td>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>{course.invoiceDate}</td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>DOCTOR NAME: </td>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>{course.title}</td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>CUSTOMER NAME:</td>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>{course.customerName}</td>
        </tr>
        <tr>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>TOTAL AMOUNT:</td>
          <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>{course.totalAmount}</td>
        </tr>

        <tr>
                    <td colspan="2">
                        <center>
                        <marquee>THANK YOU FOR TAKING SERVICE FROM US</marquee>
                        </center>
                    </td>
                </tr>
        {/* Other table rows */}
      </table>
    </center>
    <Container className="text-center">
      <Button
        color="danger"
        onClick={() => {
          deleteCourse(course.id);
        }}
      >
        Delete
      </Button>
      <Button
        color="warning"
        className="m-3"
        onClick={() => {
          updateCourse(course.id, course.title, course.description);
        }}
      >
        Update
      </Button>
    </Container>
  </CardBody>
</Card>

    </>
  );
};

export default Course;
