import React from 'react'
import './contactFavorites.css'
import FaceIcon from '@mui/icons-material/Face';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const ContactFavorites = () => {
  const iconStyle = {
    fontSize:'70px',
    color: "rgb(25, 35, 51)"
  }


  return (
    <section id="contact-favorite-container">
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Chitra</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-help">
        <div className="contact-image">
          <LocalHospitalIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
<<<<<<< HEAD
          <h1>Call Help</h1>
  
=======
          <h1>Lema</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Meseret</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Sally</h1>
          <h3>403-123-4567</h3>
>>>>>>> e9eb043 (changing layout)
        </div>
      </div>
      
    
       
    </section>
  )
}

export default ContactFavorites