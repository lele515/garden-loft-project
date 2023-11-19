import React from "react";
import "./nav.css";
import CabinIcon from "@mui/icons-material/Cabin";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';

const Nav = () => {
const iconStyle = {
  fontSize:'50px'
}

  return (
    <nav className="navbar-container">
      <a className="nav-icons" href="#homepage">
        <CabinIcon style={iconStyle}/>
        <h1>Home</h1>
      </a>
      <a className="nav-icons" href="#contacts">
        <PermContactCalendarIcon style={iconStyle} />
        <h1>Contacts</h1>
      </a>
      <a className="nav-icons" href="#Calendar">
        <CalendarMonthIcon style={iconStyle}/>
        <h1>Calendar</h1>
      </a>
      <a className="nav-icons" href="#iotControls">
        <BroadcastOnHomeIcon style={iconStyle}/>
        <h1>Home Controls</h1>
      </a>
      <a className="nav-icons" href="#entertainment">
        <LiveTvIcon style={iconStyle}/>
        <h1>Entertainment</h1>
      </a>
      <a className="nav-icons" href="#settings">
        <SettingsIcon style={iconStyle}/>
        <h1>Settings</h1>
      </a>
    
    </nav>
  );
};

export default Nav;
