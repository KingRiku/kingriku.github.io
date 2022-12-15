import { NextPage } from 'next'
import React, { Fragment } from 'react'
import { Container, Button, Row, Col, FormGroup } from 'react-bootstrap'
import Collections from './collections'
import EventCards from './components/cards'

import Header from './components/header'
import Histories from './components/histories'

const HomeGrid: NextPage = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Header />
        </Row>
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
    </Fragment>
  )
}

export default HomeGrid