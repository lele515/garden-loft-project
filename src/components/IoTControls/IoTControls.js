import React from "react";
import "./iotcontrols.css";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const IoTControls = () => {
  const iconStyle = {
    fontSize:'70px'
  }
  return (
    <section id="iotControls">
      <div className="iotControls-main">
        <article className="control__card">
          <LightbulbIcon style={iconStyle}/>
          <h5>Lights</h5>
        </article>
        <article className="control__card">
        <ThermostatIcon style={iconStyle}/>
          <h5>Temperature</h5>
        </article>
        <article className="control__card">
          {/* <FiUser className='about__icon'/> */}
          <h5>Lock</h5>
        </article>
        <article className="control__card">
          {/* <VscFolderLibrary className='about__icon'/> */}
          <h5>Other</h5>
        </article>
      </div>
    </section>
  );
};

export default IoTControls;
