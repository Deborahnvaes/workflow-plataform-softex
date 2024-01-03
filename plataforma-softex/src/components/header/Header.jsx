import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <header>
     <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Olá, Usuário</Navbar.Brand>
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
      </Container>
    </Navbar>

    </header>
  )
}

export default Header
