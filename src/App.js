

import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Course from "./Course";
import Allcourses from "./Allcourses";
import AddCourses from "./AddCourses";
import UpdateCourse from "./UpdateCourse";
import Header from "./Header";
import Menu from "./Menu";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
function App() {
  const btnHandle = () => {
    toast.success("this is my first message", {
      position: "top-center",
    });
  };

  return (
    <>
    

     <div>
        
       
    
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <h2>
                <Menu />
              </h2>
            </Col>
            <Col md={8}>
            <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add-course" element={<AddCourses/>} />
      <Route path="/view-courses" element={<Allcourses/>} />
      <Route path="/update-course/:id" element={<UpdateCourse />} /> {/* Update route to accept 'id' parameter */}
     

    </Routes>
           
            </Col>
          </Row>
        </Container>
       </div> 
    
    </>
    
      
      
      
    
  );
}

export default App;

