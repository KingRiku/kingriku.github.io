import React from 'react'
import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import ProfileImage from '../assets/profile.png'
import SideCards from '../components/side_cards'
import Layout from '../components/utils/layout'

const Profile = () => {
  return (
    <Layout>
      <Container>
        <Row className='mb-3'>
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
        <Row className='mb-3'>
          <Col xs='6' sm='6' md='6' lg='6' className='d-flex justify-content-center'>
            <h6>Seguidores</h6>
          </Col>
          <Col xs='6' sm='6' md='6' lg='6' className='d-flex justify-content-center'>
            <h6>Seguidos</h6>
          </Col>
        </Row>
        <Row className='mb-3'>
          <SideCards></SideCards>
        </Row>
        <Row className='mb-3'>
          <Col lg='12' className='d-flex justify-content-center'>
            <Button variant='dark'>Cerrar Sesión</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Profile