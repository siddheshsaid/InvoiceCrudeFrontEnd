import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "./api/Bootapi";
import Course from "./Course";

const AddCourses = () => {
  useEffect(() => {
    document.title = "Add Courses";
  }, []);

  const [course, setCourse] = useState({});
  const [invoice, setInvoice] = useState({});


  //FORM HANDLER FUNCTION
  const handleForm = (e) => {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  };

  //CREATING FUNCTION TO POST DATA ON SERVER
  //It takes a single argument data, which is expected to be an object.
// It uses Axios to send a POST request to a URL constructed using ${base_url}/courses.
// The data object is included in the request body, so the server will receive the data you passed as data.
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response)
        toast.success("Course added successfully..")

      }) .catch((error)=>{
        console.log(error)
        console.log("error")
        toast.error("Error! Something went wrong..")

      })
    

  }
  return (
    <>
      <h1 className="text-center my-3">Fill Invoice Details</h1>

      <Form onSubmit={handleForm}>
      
      
      <FormGroup>
        <label for="customerName">Customer Name</label>
        <Input
          type="text"
          placeholder="Enter customer name"
          id="customerName"
          onChange={(e) => {
        
           setCourse({ ...course, customerName: e.target.value });

          }}
        />
      </FormGroup>

      <FormGroup>
        <label for="totalAmount">Total Amount</label>
        <Input
          type="text"
          placeholder="Enter total amount"
          id="totalAmount"
          onChange={(e) => {
            setCourse({ ...course, totalAmount: e.target.value });
          }}
        />
      </FormGroup>
      

       
        <FormGroup>
          <label for="title">Doctor name</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({...course,title: e.target.value});
                
              }
            }
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Prescription</label>
          <Input
            type="textarea"
            placeholder="Enter prescription here"
            id="description"
            style={{ height: 150 }}
            onChange={(e)=>{
              setCourse({...course,description: e.target.value})
            }}
          />
        </FormGroup>
      <Container className="text-center">
        <Button type="submit" color="success">
          Create Invoice
        </Button>
        <Button
          type="reset"
          color="warning"
          className="m-4"
          onClick={(e) => {
            setCourse({});
          }}
        >
          Clear
        </Button>
      </Container>
      {/* Nested form */}
      
      </Form>
    
      {/* <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter id here"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
              //{ ...course }: This part uses the spread operator (...) to create a shallow copy of the course object.
              // This is done to avoid directly mutating the state, which is a recommended practice in React.
              //
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter title here"
            id="title"
            onChange={(e) => {
              setCourse({...course,title: e.target.value});
                
              }
            }
          />
        </FormGroup>

        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e)=>{
              setCourse({...course,description: e.target.value})
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button type="reset" color="warning" className="m-4"
          onClick={(e)=>{
            setCourse({})  //check if it cancels it is working

          }}
          >
            Clear
          </Button>
        </Container>
      </Form> */}
      
    </>
  );
};

export default AddCourses;
