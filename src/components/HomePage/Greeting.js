import React from 'react'
import './greeting.css'
import LightModeIcon from '@mui/icons-material/LightMode';

const Greeting = () => {
  const iconStyle = {
    fontSize:'70px'
  }
  return (
    <section id="greeting-container">
      <div className="greeting-change">
        <h1>Good Morning <br />24 &deg; Sunny</h1>
        <LightModeIcon style={iconStyle}/>
      </div>
    </section>
  )
}

export default Greeting