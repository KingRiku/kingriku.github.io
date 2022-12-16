import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SignUp from './forms/sign-up'

const Register = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h4>Register</h4>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Link href='/'>Iniciar sesión</Link>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Link href='/'>Registrarse</Link>
        </Col>
      </Row>
      <Row>
        <SignUp />
      </Row>
    </Container>
  )
}

export default Register