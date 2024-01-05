import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import './style.css'

function Header() {
  return (
    <header style={{position: 'relative'}}>
     <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Navbar.Brand href="#home"><i className='fas fa-user' ></i> Olá, Usuário</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#link">Faltas</Nav.Link>
            <Nav.Link href="#link">Ranking</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <Nav.Link href="#link">Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default Header
