import "./App.css";
import Nav from './components/Nav/Nav'
import HomePage from './components/HomePage/HomePage'
import Contacts from './components/Contacts/Contact'
import IoTControls from './components/IoTControls/IoTControls'
import Calendar from './components/Calendar/Calendar'
import Entertainment from './components/Entertainment/Entertainment'
import Settings from './components/Settings/Settings'
import Lights from "./components/IoTControls/Lights/Lights";


function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage/> 
      <IoTControls/>
      <Lights />
      <Entertainment/>
      <Calendar/>
      <Contacts/>
      <Settings/>
    </div>
  );
}

export default App;