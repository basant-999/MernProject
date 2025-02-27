import axios from 'axios'
import React, { useEffect, useState } from 'react'
import  BASE_URL from "../Config"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import rk from "../img/car1.jpeg"
import bk from "../img/car2.jpeg"
import kk from "../img/car3.webp"

const Home = () => {
  const [mydata,Setmydata] = useState([])
  const navigate= useNavigate();

  const Loding=async()=>{
   
        let api =`${BASE_URL}/doctor/homedoctordisplay`
        try {
          const respone = await axios.get(api)
          console.log(respone.data)
          Setmydata(respone.data)
          
        } catch (error) {
          console.log(error)
        }
  }

  useEffect(()=>{
    Loding()
  },[])

  
const patApointment=(id)=>{
  navigate(`/patientapp/${id}`)
}



  const ans = mydata.map((key)=>{
       return(
        <>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.specialization}
          Address : {key.address} City : {key.city} Mobile : {key.mobile}
          Email : {key.email}
        </Card.Text>
        <Button variant="primary" onClick={()=>{patApointment(key._id)}}>Appointemtn Now!</Button>
      </Card.Body>
    </Card>
    
        </>
       )
  })

  return (
<>
<Carousel>
      <Carousel.Item>
       <img src={rk} alt=""  style={{width:"100%",height:"80vh"}}/>
        <Carousel.Caption>
          <h3>Expensive Car</h3>
          <p>Provide car  Low prices </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={bk} alt="" style={{width:"100%",height:"80vh"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={kk} alt=""style={{width:"100%",height:"80vh"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<h1> Welcome To Online Appointment System</h1>
{ans}
</>
    
  )
}

export default Home