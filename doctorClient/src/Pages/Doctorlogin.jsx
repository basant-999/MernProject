import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../Config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Doctorlogin = () => {
  const navigate = useNavigate()
    const [email,Setemail] = useState("")
    const [password,Setpassword] = useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let api =`${BASE_URL}/doctor/doctorlogin`
        try {
            const respo = await axios.post(api,{email:email,password:password})
            console.log(respo)

            localStorage.setItem("name",respo.data.name)
            localStorage.setItem("email",respo.data.email)
            localStorage.setItem("docid",respo.data._id)

            toast.success("yor successfully login")
            navigate("/doctordashboard")
        } catch (error) {
          
            toast.success(error.response.data.msg)
            
        }
    }
  return (

    <>
      <h1> Doctor Login</h1>
          <div id="doclogin">
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{Setemail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
    </div>

     <ToastContainer />
    </>
  )
}

export default Doctorlogin