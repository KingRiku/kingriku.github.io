import React, { Fragment, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <Button variant='light' onClick={handleShow}><FontAwesomeIcon style={{ color: 'black' }} icon={faBars} /></Button>
        <Navbar.Brand href="#">Aplicacion Tesis v2</Navbar.Brand>
        <Link href={'/profile'}>
          <Navbar.Brand ><FontAwesomeIcon style={{ color: 'black' }} icon={faUser} /></Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} >
        <Container>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='d-flex justify-content-center'>Tesis-app Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
          <hr></hr>
            <Link href={'/home'}>
              <h6 style={{ padding: '1rem' }}  className='d-flex justify-content-center'>Marcas</h6>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
            <Link href={'/followed_artist'}>
              <h6 style={{ padding: '1rem' }} className='d-flex justify-content-center'>Artistas</h6>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
            <Link href={'/collections_lists'}>
              <h6 style={{ padding: '1rem' }} className='d-flex justify-content-center'>Colecciones</h6>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
          </Nav>
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </Fragment>
  )
}

export default Header