import React from "react";
import "./nav.css";
import CabinIcon from "@mui/icons-material/Cabin";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";

const Nav = () => {
const iconStyle = {
  fontSize:'50px'
}

const [activeNav, setActiveNav] = useState('#homepage')

  return (
    <nav className="navbar-container">
      <a  href="#homepage" onClick={() => setActiveNav('#homepage')} className={activeNav === '#homepage' ? 'active' : ''}>
        <CabinIcon style={iconStyle}/>
        <h1>Home</h1>
      </a>
      <a href="#iotControls" onClick={() => setActiveNav('#iotControls')} className={activeNav === '#iotControls' ? 'active' : ''}>
        <BroadcastOnHomeIcon style={iconStyle}/>
        <h1>Home Controls</h1>
      </a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>
        <PermContactCalendarIcon style={iconStyle} />
        <h1>Contacts</h1>
      </a>
      <a href="#calendar" onClick={() => setActiveNav('#calendar')} className={activeNav === '#calendar' ? 'active' : ''}>
        <CalendarMonthIcon style={iconStyle}/>
        <h1>Calendar</h1>
      </a>
      <a href="#entertainment" onClick={() => setActiveNav('#entertainment')} className={activeNav === '#entertainment' ? 'active' : ''}>
        <LiveTvIcon style={iconStyle}/>
        <h1>Entertainment</h1>
      </a>
      <a href="#settings" onClick={() => setActiveNav('settings')} className={activeNav === '#settings' ? 'active' : ''}>
        <SettingsIcon style={iconStyle}/>
        <h1>Settings</h1>
      </a>
    
    </nav>
  );
};

export default Nav;
