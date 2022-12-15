import React from 'react'
import { Container, Button, Row, Col, FormGroup, Card, FormCheck } from 'react-bootstrap'
import { MusicaStiles } from '../data/musical_style'
import NewComponent, { checkerbox } from '../components/checktester'
import Footer from './components/footer'
import Link from 'next/link'
import SelectionNav from './components/selection_nav'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  const check: checkerbox = {
    id: '1',
    value: '1',
    text: 'pop',

  }
  return (
    <div className="nk-app-root">
      <div className="nk-wrap">
        <Container>
          <Row>
            <Col className='mb-3'>
              <div>Bienvenido ...</div>
              <h4><strong>Escoge tus intereses:</strong></h4>
            </Col>     
          </Row>
          <Row className='mb-3'>
            <SelectionNav />
            {/* {
              MusicaStiles.map((item, index) => (
                <Col xs='6' lg='3' key={index}>
                  <NewComponent checkerbox={item} />
                </Col>
              ))
            } */}
          </Row>
          <Row>
            <Col className='d-flex justify-content-end'>
              <Link href={`/artist_selector`}>
                <Button variant="dark"> Siguente</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage


