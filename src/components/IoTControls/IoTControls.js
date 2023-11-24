import "./iotcontrols.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import HttpsIcon from "@mui/icons-material/Https";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";


const IoTControls = () => {
  const iconStyle = {
    fontSize: "70px",
  };

const handleLightChange = () => {
  console.log("hello");
}

  return (
    <section id="iotControls">
      <div className="iotControls-main">
        <article onClick={handleLightChange} className="control__card">
          <LightbulbIcon style={iconStyle} />
          <h5>Lights</h5>
        </article>
        <article onClick={handleLightChange} className="control__card">
          <ThermostatIcon style={iconStyle} />
          <h5>Temperature</h5>
        </article>
        <article onClick={handleLightChange} className="control__card">
          <HttpsIcon style={iconStyle} />
          <h5>Lock</h5>
        </article>
        <article onClick={handleLightChange} className="control__card">
          <DevicesOtherIcon style={iconStyle} />
          <h5>Other</h5>
        </article>
      </div>
      </section>
  );
};

export default IoTControls;
