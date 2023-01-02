import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Layout from '../components/utils/layout'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Follows = () => {
  return (
    <Layout>
      <Container>
        <Row className='mt-3'>
          <Col xs='12' lg='12' className='d-flex justify-content-center'>
            <h6><strong>Seguidores</strong></h6>
          </Col>
        </Row>
        <Row className='pt-2 'mt-2 style={{backgroundColor: '#ffff'}}>
          <Col xs='2'lg='2' style={{minHeight: '3rem'}}>
            <Image src={'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'} height='50rem'></Image>
          </Col>
          <Col xs='10'lg='10' className='pb-2'>
            <Row>
              <Col xs='10'lg='10'>
                <h6><strong>{"Usuario 4"}</strong></h6> 
              </Col>
              <Col xs='6'lg='10'>
                <h6>12 <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='sm' icon={faHeart} /> Seguidores</h6>
              </Col>
              <Col xs='6'lg='10'>
                <h6>18 <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='sm' icon={faHeart} /> Seguidos</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='pt-2 mt-2' style={{backgroundColor: '#ffff'}}>
          <Col xs='2'lg='2' style={{minHeight: '3rem'}}>
            <Image src={'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'} height='50rem'></Image>
          </Col>
          <Col xs='10'lg='10' className='pb-2'>
            <Row>
              <Col xs='10'lg='10'>
                <h6><strong>{"Usuario 9"}</strong></h6> 
              </Col>
              <Col xs='6'lg='10'>
                <h6>2 <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='sm' icon={faHeart} /> Seguidores</h6>
              </Col>
              <Col xs='6'lg='10'>
                <h6>16 <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='sm' icon={faHeart} /> Seguidos</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Follows