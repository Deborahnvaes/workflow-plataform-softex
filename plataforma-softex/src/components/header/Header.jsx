import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css'

function Header() {
  return (
    <header style={{position: 'relative'}}>
     <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Navbar.Brand href="#home"><i className='fas fa-user icon-header' ></i> Olá, Usuário</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/tela-inicial">Início</Nav.Link>
          <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
          <Nav.Link as={Link} to="/faltas">Faltas</Nav.Link>
          <Nav.Link as={Link} to="/ranking">Ranking</Nav.Link>
          <Nav.Link as={Link} to="/">Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header
