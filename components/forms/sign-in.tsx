import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React from 'react'
import { Container, Button, Row, Col, FormGroup } from 'react-bootstrap'

const SignIn = () => {
  const createSession = async () => {
    await localStorage.setItem("session", "sesionLogeada");
    window.location.reload();
  }

  return (
    <Container>
      <Row>
        <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={ values => {
                console.log(values);
              }}
            >
              {() => (
                <Form className="is-alter">
                  <FormGroup className='mb-3'>
                    <div className="form-label-group">
                      <label className="form-label">
                        Correo
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <Field
                        type="text"
                        name="email"
                        className="form-control-lg form-control"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <div className="form-label-group">
                      <label className="form-label">
                        Contraseña
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <Field
                        type="password"
                        name="password"
                        className="form-control-lg form-control"
                      />
                    </div>
                  </FormGroup>
                  <div className='d-flex justify-content-end'>
                    <Link href='/'>olvidaste tu contraseña?</Link>
                  </div>
                  <FormGroup className='d-flex justify-content-center'>
                    <Button color="primary" type='submit' onClick={() => createSession()} className="mr-3">Iniciar sesión</Button>
                  </FormGroup>
                </Form>
              )}
            </Formik>
      </Row>
    </Container>
  )
}

export default SignIn