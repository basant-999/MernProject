import React from 'react'
import"../Css/footer.css"
import { FaFacebook,FaWhatsapp ,FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
   <div  id='maindiv'> 
          <div id='socialmedia'>
     
               <div id='sohad'>connection with us</div>
              <div id='soicons'>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
              </div>
          </div>
          <hr />

          <div id='seconddiv'>
              <div id='senhad'> Our Branch</div>
              <div id='secsos'>
                Delhi,Bhopal,Indore
              </div>
          </div>
          <hr />
   </div>
    </>
  )
}

export default Footer