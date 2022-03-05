import logo from './logo.svg';
import signature from './signature.png';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, NavbarBrand } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap'

import imageInSrc from './imageInSrc.jpg';
import imageInPublic from './imageInPublic.png';
import videomp4 from './myVideo.mp4';

function App() {
  return (
    <div className="App">
        <div style={{ border:"solid 1px black", maxWidth:'100vw', padding:'20px'}} > 
        <h1 className="title red">Satouri Ridha</h1>
        <br ></br>
        <img  src={imageInSrc} className="imgages" alt="firstimg" />
        <br ></br>
        <img src={imageInPublic} className="imgages" alt="scdimage" />
            {/* Impossible de mettre l image dans le dossier public voir ci dessous
            Compiled with problems:X
            ERROR in ./src/App.js 6:0-56
            Module not found: Error: You attempted to import ../public/imageInPublic.png
            which falls outside of the project src/ directory. Relative imports outside 
            of src/ are not supported. */}
        </div>
        <video width='320' height='240' controls>
        <source src={videomp4} type="video/mp4" ></source>
        </video>
      
    </div>
  );
}

export default App;
