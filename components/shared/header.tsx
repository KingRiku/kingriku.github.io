import React, { Fragment, useState } from 'react'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import logo from '../../assets/Logo.png'

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Navbar expand="lg" style={{ backgroundColor: '#84C5EE' }}>
        <Container>
        <Button variant='light' onClick={handleShow}><FontAwesomeIcon style={{ color: 'black' }} icon={faBars} /></Button>
        <Link href='/home'>
          <Navbar.Brand><Image src={logo.src} style={{ width: '10rem' }}></Image></Navbar.Brand>
        </Link>
        <Link href={'/profile'}>
          <Navbar.Brand><FontAwesomeIcon style={{ color: 'black' }} icon={faUser} /></Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} >
        <Container>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='d-flex justify-content-center'><Image src={logo.src} style={{ width: '10rem' }}></Image></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
          <hr></hr>
            <Link href={'/home'}>
              <h5 style={{ fontWeight: 'bold' ,padding: '1rem' }}  className='d-flex justify-content-center'>Marcas</h5>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
            <Link href={'/followed_artist'}>
              <h5 style={{ fontWeight: 'bold' ,padding: '1rem' }} className='d-flex justify-content-center'>Artistas</h5>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
            <Link href={'/re_sellers'}>
              <h5 style={{ fontWeight: 'bold' ,padding: '1rem' }} className='d-flex justify-content-center'>Intercambio</h5>
            </Link>
            <hr style={{ color: '#D555A6', fontWeight: 'bold' }}></hr>
            <Link href={'/shopping_bar'}>
              <h5 style={{ fontWeight: 'bold' ,padding: '1rem' }} className='d-flex justify-content-center'><FontAwesomeIcon style={{ color: 'blue' }} icon={faShoppingBasket} /></h5>
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