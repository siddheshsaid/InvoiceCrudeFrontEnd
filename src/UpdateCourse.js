
// import { Button, Container, Form, FormGroup, Input } from 'reactstrap'

// import React, { useState } from 'react'
// import { useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import base_url from './api/Bootapi';

// const UpdateCourse = () => {
//   const location = useLocation();
//     const { id } = useParams();
//     const initialTitle = new URLSearchParams(location.search).get('title');
//   const initialDescription = new URLSearchParams(location.search).get('description');
//     const [inputId, setInputId] = useState(id); // Initialize inputId with the 'id'
//     const [title, setTitle]=useState(initialTitle);
//     const [description, setDescription] = useState(initialDescription);

//     const updatedCourse = {
//       id: inputId,
//       title: title,
//       description: description,
//     };

//     const handleInputChange = (e) => {
//       setInputId( e.target.value); // Update inputId when the input field changes
//     };
//     const handleTitleChange=(e)=>{
//     setTitle(e.target.value);

//     };
//     const handleDescriptionChange=(e)=>{
//       setDescription(e.target.value);
//     };
//     const handleUpdateCourse=()=>{
//       updateAllCourses();
//     }

//     //CREATE FUNCTION TO UPDATE DATA ON SERVER

//     const updateAllCourses=(updateCourse)=>{
//       axios.post(`${base_url}/courses`,updatedCourse).then(
//         (response)=> {
//         console.log(response);
//         console.log(success);

//       }).catch((error)=>{
//          console.log(error)

//         })

//     }
    
    
  

  

//     return (
//         <>
//         <h1 className="text-center my-3" >Fill Course Details</h1>
//         <Form onSubmit={handleUpdateCourse}>
//             <FormGroup>
//                 <label for="userId"> userId</label>
              
//                 <Input
//         type="text"
//         placeholder="Enter here"
//         name="userId"
//         id="userId"
//         value={inputId} // Use inputId as the value
//         onChange={handleInputChange} // Handle input changes
//       />
//             </FormGroup>
//             <FormGroup>
//                 <label for="title">Course Title{initialTitle }</label>
//                 <Input type="text" placeholder="Enter title here" id="title"
//                 value={title}
//                 onChange={handleTitleChange}
//                 />
//             </FormGroup>
        
//             <FormGroup>
               
//                 <label for="description">Course Description{initialDescription}</label>
//                 <Input type="textarea" 
//                 placeholder="Enter description here"
//                  id="description" style={{height:150}}
//                  value={description}
//                  onChange={handleDescriptionChange}
//                  />
                 
           
//             </FormGroup>
//            <Container className='text-center'>
//                 <Button color="success" type="submit">Update Course</Button>
//                 <Button color="warning" className='m-4'>Clear</Button>
//                 </Container>
//         </Form>
//         </>
//           )
//         }


// export default UpdateCourse

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import base_url from "./api/Bootapi";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { toast } from "react-toastify";



const UpdateCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({id: id, title: "", description: "" });

  useEffect(() => {
    axios.get(`${base_url}/courses/${id}`).then((response) => {
      console.log(response.data)
      setCourse(response.data);

    });
  }, []);

  const updateCourse= (e) => {
    console.log(course);
    updateAllCourse(course);
    e.preventDefault();
  };

  const updateAllCourse = (data) => {
    axios
      .put(`${base_url}/courses`,data
      // {
        // title: "Updated Course Title",
        // body: "This is an updated course description."
      // }
      )
      .then((response) => {
        console.log(response)
        toast.success("Course updated successfully..")
      }).catch((error)=>{
        console.log(error);
        toast.success("Error! Something went wrong")
      })
  };

  if (!course) return "No course data available!";

  return (
    <div>
      
      <Form onSubmit={updateCourse}>
      <FormGroup>
        <label for="customerName">Customer Name</label>
        <Input
          type="text"
          placeholder="Enter customer name"
          id="customerName"
          value={course.customerName}
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
          value={course.totalAmount}
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
            value={course.title}

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
            value={course.description}

            onChange={(e)=>{
              setCourse({...course,description: e.target.value})
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Update Course
          </Button>
          <Button type="reset" color="warning" className="m-4"
          onClick={(e)=>{
            setCourse({id: " ", title: " ", description: " "})  //check if it cancels it is working

          }}
          >
            Clear
          </Button>
        </Container>
      </Form>
      {/* <button onClick={updateCourse}>Update Course</button> */}
    </div>
  );
};

export default UpdateCourse;


// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import base_url from "./api/Bootapi";
// import { Button, Container, Form, FormGroup, Input } from "reactstrap";

// const UpdateCourse = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState({ id: id, title: "", description: "" });

//   useEffect(() => {
//     axios.get(`${base_url}/courses/${id}`).then((response) => {
//       setCourse(response.data);
//     });
//   }, [id]);

//   const updateCourse = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     axios
//       .put(`${base_url}/courses`, course) // Use the correct endpoint for updating a course
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   if (!course) return "No course data available!";

//   return (
//     <>
//     <div>
         
//     </div>
//     </>
//   );
// };

// export default UpdateCourse;
