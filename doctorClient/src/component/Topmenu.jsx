import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import BASE_URL from '../Config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Topmenu = () => {
    const [input,Setinput] = useState({})
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=async(e)=>{
    e.preventDefault()
   
    let api =`${BASE_URL}/doctor/resgistration`
    const respo = await axios.post(api,input)
    console.log(respo.data)
    toast.success(respo.data.msg);
    setShow(false)
  }

  const handleInput=(e)=>{
    let name = e.target.name
    let value = e.target.value
     Setinput(item=>({...item,[name]:value}))
     console.log(input)
     

  }
  return (
   
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="searchdoctor">Search Doctor</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link href="#pricing" onClick={handleShow}>Doctor-Resistration</Nav.Link>
            <Nav.Link as={Link} to="doctorlogin">DoctorLogin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       {/* ========================================================= */}
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Enter Doctor Name</Form.Label>
                         <Form.Control type="text" name="name" onChange={handleInput}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Enter Address</Form.Label>
                         <Form.Control type="text" name="address" onChange={handleInput}/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Enter City</Form.Label>
                         <Form.Control type="text" name="city" onChange={handleInput}/>
                     </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Mobile no</Form.Label>
                        <Form.Control type="text" name="mobile" onChange={handleInput}/>
                     </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>select Specialization</Form.Label>
                            <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
                            <option>Open this select menu</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="ENT">ENT</option>
                            <option value="Neuro Surgeon">Neuro Surgeon</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Plastic Surgeon">Plastic Surgeon</option>
                         </Form.Select>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleInput} />
                    </Form.Group>
             </Form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer />

    </>
  )
}

export default Topmenu