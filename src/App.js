import logo from './logo.svg';
import './App.css';
import Navbar from "./comopents/Navbar"
import Shop from './comopents/Shop';
function App() {
  return (
    <>
     <Navbar/>
     <div className="container">
      <Shop/> 
     </div>
    </>
  );
}

export default App;
