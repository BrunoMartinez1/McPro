import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';


const navbar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar bg="light" data-bs-theme="light">
              <Container>
                <Nav className="me-center">
                  <Nav.Link to='/noticias'>NOTICIAS</Nav.Link>
                  <Nav.Link to='/fondo'>A FONDO</Nav.Link>
                  <Nav.Link to='/Entrevista'>ENTREVISTAS</Nav.Link>
                  <Nav.Link to='/Opinion'>OPINIÓN</Nav.Link>
                  <Nav.Link to='/eventos'>EVENTOS</Nav.Link>
                  <Nav.Link to='/recursos'>RECURSOS</Nav.Link>
                  <Nav.Link to='/articulos'>TODOS LOS ARTÍCULOS</Nav.Link>
                  <Nav.Link to='/guia'>DESCARGAR GUÍA TRANFORMACIÓN DIGITAL</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="pepito2" id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MCPRO
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="texto" to='/'>Inicio</Link>
                  <hr class="opacity-20"></hr>
                  <Link className="texto" to='/Entrevista'>Actualidad</Link>
                  <hr class="opacity-20"></hr>
                  <Link className="texto" to='/Opinion'>Premios y Logros</Link>
                  <hr class="opacity-20"></hr>


                  <div className="margen">
                  <h6 className="nosotros">Contactate con nostros</h6>

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
                  </div>
                  </div>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>




  );



}

export default navbar