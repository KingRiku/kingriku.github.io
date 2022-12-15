import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import ProfileImage from '../assets/profile.png'
import Header from './components/header'
import SideCards from './components/side_cards'
const Profile = () => {
  return (
    <Container>
      <Header/>
      <Row>
        <Col sm='12' md='12' lg='12' className='d-flex justify-content-center'>
          <Image src={'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'} height='100rem'></Image>
        </Col>
        <Col sm='12' md='12' lg='12' className='d-flex justify-content-center'>
          <h4>User 1</h4>
        </Col>
        <Col sm='12' md='12' lg='12' className='d-flex justify-content-center'>
          <h6>Desc</h6>
        </Col>
      </Row>
      <Row>
        <Col xs='6' sm='6' md='6' lg='6' className='d-flex justify-content-center'>
          <h6>Seguidores</h6>
        </Col>
        <Col xs='6' sm='6' md='6' lg='6' className='d-flex justify-content-center'>
          <h6>Seguidos</h6>
        </Col>
      </Row>
      <Row>
        <SideCards></SideCards>
      </Row>
    </Container>
  )
}

export default Profile