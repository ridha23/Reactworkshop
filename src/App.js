import logo from './logo.svg';
import './App.css';
//import myfirstimage from "../public/imageInPublic.png"
import logo from './20456790.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <img src="20456790.jpg" alt="myimage" />
      <img src={logo} alt="Logo" />
        
      </header>
    </div>
  );
}

export default App;
