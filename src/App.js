import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Navbar from './navegacion/navbar';
import noticias from './paginas/noticias';
import fondo from './paginas/fondo';
import Entrevistas from './paginas/Entrevistas';
import Opinion from './paginas/Opinion';
import eventos from "./paginas/eventos";
import recursos from "./paginas/recursos";
import articulos from "./paginas/articulos";
import guia from "./paginas/guia";



function App() {
  return (
  <div>
    <center>
    <h1 className="pepito">MCPRO</h1>
    </center>
    <b/><hr/>

    <Router>
    <Navbar/>
    <Routes>
    <Route path="/" exact Component={noticias}/>
    <Route path="/fondo" exact Component={fondo}/>
    <Route path="/Entrevista" exact Component={Entrevistas}/>
    <Route path="/Opinion" exact Component={Opinion}/>



    </Routes>
    </Router>



    <center>
        <footer className='final'>
          <h1 className='tex-f'>tpnet_</h1>



          <div className="icon-container">
            <a href="https://twitter.com/muycomputerpro" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.facebook.com/muycomputerpro" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.linkedin.com/groups/3691753/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>

            <a href="https://www.muytv.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="icon" />
            </a>
            <br></br>

          </div>
          <br></br>

          <p style={{ display: 'inline' }} className='finish'>SOBRE MUYCOMPUTERPRO  </p>
          <p style={{ display: 'inline' }} className='finish'>PUBLICIDAD  </p>
          <p style={{ display: 'inline' }} className='finish'>ACERCA DE TPNET  </p>
          <p style={{ display: 'inline' }} className='finish'>INFORMACIÓN LEGAL  </p>
          <p style={{ display: 'inline' }} className='finish'>CONTACTO  </p>

        </footer>
      </center>

    </div>








  );
}

export default App;