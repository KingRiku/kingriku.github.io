import React, { useState } from 'react'
import { Container, Button, Row, Col, FormGroup, Card, FormCheck } from 'react-bootstrap'
import { MusicaStiles } from '../../data/musical_style'
import NewComponent, { checkerbox } from '../checktester'
// import Footer from './components/footer'
import Link from 'next/link'
import SelectionNav from '../selection_groups'
import { NextPage } from 'next'
// import Home from '../../pages/home'
import Welcome from '../../pages/welcome'
import { useRouter } from 'next/router'

const HomePage: NextPage = () => {
  const [formed, setFormed] = useState(true)
  const router = useRouter()

  const selectionForm = () => {
    setFormed(false)
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
            {
              formed ? 
                <SelectionNav />
              : <Link href='/welcome' />
            }
          </Row>
          {/* <Row>
            <Col className='d-flex justify-content-end'>
              <Link href={`/home`}>
                <Button variant="dark" onClick={() => (selectionForm())}>Siguente</Button>
              </Link>
            </Col>
          </Row> */}
        </Container>
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default HomePage


