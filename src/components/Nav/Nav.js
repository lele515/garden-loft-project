import "./nav.css";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IoTControls from "../IoTControls/IoTControls";
import Entertainment from "../Entertainment/Entertainment";
import Calendar from "../Calendar/Calendar";
import Contact from "../Contacts/Contact";
import Settings from "../Settings/Settings";
import HomePage from "../HomePage/HomePage";

const Nav = () => {
  const iconStyle = {
    fontSize:'50px'
  }
  const [activeNav, setActiveNav] = useState('#homepage')
    return (
  
  <Router>
  <nav className="navbar-container">
    <Link to="/homepage" onClick={() => setActiveNav('#homepage')} className={activeNav === '#homepage' ? 'active' : ''}>
      <div>
        <svg width="110" height="110" viewBox="0 0 659 656" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
      </div>
      <h1>Home</h1>
    </Link>
    <Link to="/iotControls" onClick={() => setActiveNav('#iotControls')} className={activeNav === '#iotControls' ? 'active' : ''}>
      <BroadcastOnHomeIcon style={iconStyle} />
      <h1>Home Controls</h1>
    </Link>
    <Link to="/entertainment" onClick={() => setActiveNav('#entertainment')} className={activeNav === '#entertainment' ? 'active' : ''}>
      <LiveTvIcon style={iconStyle} />
      <h1>Entertainment</h1>
    </Link>
    <Link to="/calendar" onClick={() => setActiveNav('#calendar')} className={activeNav === '#calendar' ? 'active' : ''}>
      <CalendarMonthIcon style={iconStyle} />
      <h1>Calendar</h1>
    </Link>
    <Link to="/contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>
      <PermContactCalendarIcon style={iconStyle} />
      <h1>Contacts</h1>
    </Link>
    <Link to="/settings" onClick={() => setActiveNav('settings')} className={activeNav === '#settings' ? 'active' : ''}>
      <SettingsIcon style={iconStyle} />
      <h1>Settings</h1>
    </Link>
  </nav>
    <Routes>
        <Route path='/iotControls' element={<IoTControls />}></Route>
        <Route path='/entertainment' element={<Entertainment />}></Route>
        <Route path='/calendar' element={<Calendar />}></Route>
        <Route path='/contacts' element={<Contact />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
        <Route path='/homepage' element={<HomePage />}></Route>
      </Routes>
  </Router>
  );
  };
  
  export default Nav;

  


