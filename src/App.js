import "./App.css";
import logo from './ecologie.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import Recycle from "./pages/Recycle";
import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/recycle" exact component={Recycle} />
          {/* <Route component={Notfound} /> */}
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
