import { NextPage } from 'next'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SideCard from './components/side_card'

const ArtistSelector: NextPage = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs='12'>
            <h4 style={{ textAlign: 'justify' }}><strong>Hemos encontrado estos artistas que pueden ser de tu interés:</strong></h4>
          </Col>
        </Row>
        <Row>
          <Col className='mb-3'>
            <SideCard />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            <Link href={`/home_grid`}>
              <Button variant='dark'>Siguiente</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ArtistSelector
