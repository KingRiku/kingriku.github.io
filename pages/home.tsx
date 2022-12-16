import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EventCards from '../components/event_cards'
import Histories from '../components/histories'
import Layout from '../components/utils/layout'

const Home = () => {
  return (
    <Layout>
        <Container>
          <Row>
            <Col xs='12' sm='12' md='12' lg='12' className='d-flex justify-content-center mb-1'>
              <h5 style={{ fontWeight: 'bold'}}>Artistas en tendencia</h5>
            </Col>
            <Col xs='12' sm='12' md='12' lg='12'>
              <Histories />
            </Col>
          </Row>
          <Row>
            <Col xs='12' sm='12' md='12' lg='12' className='d-flex justify-content-center mb-2'>
              <h5 style={{ fontWeight: 'bold'}}>Marcas</h5>
            </Col>
          </Row>
          <Row>
            <EventCards />
            {/* <Collections /> */}
          </Row>
        </Container>
    </Layout>
  )
}

export default Home