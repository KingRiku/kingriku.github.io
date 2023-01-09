import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SignIn from './forms/sign-in'

const Login = () => {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <h4>Login</h4>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col className='d-flex justify-content-center'>
          <Link href='/'>Iniciar sesión</Link>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Link href='/components/register'>Registrarse</Link>
        </Col>
      </Row>
      <Row>
        <SignIn />
      </Row>
    </Container>
  )
}

export default Login