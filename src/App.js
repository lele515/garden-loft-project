import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Contacts from './components/Contacts/Contact'
import Entertainment from './components/Entertainment/Entertainment'
import Settings from './components/Settings/Settings'
<<<<<<< HEAD
import Lights from "./components/IoTControls/Lights/Lights";
=======
import CallHelp from "./components/CallHelp/CallHelp";
import IoTControls from "./components/IoTControls/IoTControls";
import HomePage from "./components/HomePage/HomePage";

>>>>>>> e9eb043 (changing layout)


function App() {
  return (

    <Router>
      <CallHelp />
      <Nav />
<<<<<<< HEAD
      <HomePage /> 
      <IoTControls />
      <Lights />
      <Entertainment />
      <Calendar />
      <Contacts />
      <Settings /> 
    </div>
=======
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/call-help" element={<CallHelp />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/iotControls" element={<IoTControls />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>



    // <div className="App">

    //   <Nav />
    //   <HomePage/>
    //   <IoTControls/>
    //   <Contacts/>
    //   <Calendar/>
    //   <Entertainment/>
    //   <Settings/>
    // </div>
>>>>>>> e9eb043 (changing layout)
  );
}

export default App;