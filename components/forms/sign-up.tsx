import { Formik, Form, Field } from 'formik';
import Link from 'next/link';
import React from 'react'
import { Container, Button, Row, Col, FormGroup } from 'react-bootstrap'

const SignUp = () => {
  return (
    <Container fluid>
      <Row className='mt-5'>
        <Formik
              initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                subscription: false,
                policity: false
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
                        Nombre
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <Field
                        type="text"
                        name="firstName"
                        className="form-control-lg form-control"
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <div className="form-label-group">
                      <label className="form-label">
                        Apellido
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <Field
                        type="text"
                        name="lastName"
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
                  <FormGroup className='mb-3 d-flex justify-content-center'>
                      <label>
                      Subscribe news letter
                      </label>
                      <br />
                      <Field
                        type="checkbox"
                        name="subscription"
                      />

                  </FormGroup>
                  <FormGroup className='mb-3 d-flex justify-content-center'>
                      <label>
                        You agree to our privacy and cockie policity and termas and conditions
                      </label>
                        <Field
                          type="checkbox"
                          name="policity"
                        />
                  </FormGroup>
                  <FormGroup className='d-flex justify-content-center'>
                    <Link href="/components/home" passHref legacyBehavior>
                      <Button color="primary" type='submit' className="mr-3">Registrarse</Button>
                    </Link>
                  </FormGroup>
                </Form>
              )}
            </Formik>
      </Row>
    </Container>
  )
}

export default SignUp