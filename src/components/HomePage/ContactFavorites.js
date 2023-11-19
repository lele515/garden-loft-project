import React from 'react'
import './contactFavorites.css'
import FaceIcon from '@mui/icons-material/Face';

const ContactFavorites = () => {
  const iconStyle = {
    fontSize:'70px'
  }


  return (
    <section id="contact-favorite-container">
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Myles</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Myles</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Myles</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Myles</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
      <div className="contact-fav-card">
        <div className="contact-image">
          <FaceIcon style={iconStyle}/>
        </div>
        <div className="contact-info">
          <h1>Myles</h1>
          <h3>403-123-4567</h3>
        </div>
      </div>
    </section>
  )
}

export default ContactFavorites