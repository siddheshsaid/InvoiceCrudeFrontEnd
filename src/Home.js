

import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";
import "./Home.css"; 
//import Jumbotron from 'react-bootstrap/Jumbotron'; 

const Home = () => {
  useEffect(()=>{
    document.title=" Invoices Home Page"
  },[]);
  return (
    <>
   
    <div className="jumbotron">
      <h1>List of available invoices</h1>
      
      <Container>
        <Button color="primary" outline>Start Using</Button>
    </Container>
    </div>

   
    
     
    </>
  );
};

export default Home;
