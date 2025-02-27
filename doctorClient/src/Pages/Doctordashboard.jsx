import React from 'react'
import { useNavigate ,Link,Outlet} from 'react-router-dom'


const Doctordashboard = () => {
     const navigate = useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate("/")
    }
  return (

    <>
   <div><h1>doctor dashbord panneel</h1></div>

   <div>
      welcome:{localStorage.getItem("name")}
      welcome:{localStorage.getItem("email")}
   </div>
   <button onClick={logout}>logout</button>

   <div>
      <div>
         <Link to="mypatient">my Appointment </Link>
         <br /> <br />
       
       
         </div>
      <div>
        <Outlet/>
      </div>
   </div>
   
    </>
  )
}

export default Doctordashboard