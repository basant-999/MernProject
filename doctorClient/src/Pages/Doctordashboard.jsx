import React from 'react'
import { useNavigate ,Link,Outlet} from 'react-router-dom'
import "../Css/dashboard.css"


const Doctordashboard = () => {
     const navigate = useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate("/")
    }
  return (

    <>
      <div id='dashdiv'> 
          <div id='hadin'><h1>Booking data dashbord </h1></div>
          <div id='localname'>
          welcome:{localStorage.getItem("name")} <br />
          Email:{localStorage.getItem("email")}
          </div>
           <div id='logout'>
              
                <div>
                <Link to="mypatient">search booking </Link>
                </div>
                <div>
                  <button onClick={logout}>logout</button>
               </div>
           </div>
      </div>


          <div>
            <Outlet/>
          </div>
      
      
      
    </>
  )
}

export default Doctordashboard