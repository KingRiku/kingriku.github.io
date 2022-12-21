import { Button, Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewComponent from './checktester';
import { Marcas } from '../data/marcas';
import { MusicaStiles } from '../data/musical_style';
import { Fragment, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type SelectionsGroup = {
  pop: boolean
  kpop: boolean
  ryb: boolean
  hiphop: boolean
  trap: boolean
  regaeton: boolean
  rap: boolean
  urbana: boolean
}

function SelectionNavs() {
  const router = useRouter()
  const [first, setfirst] = useState<SelectionsGroup>()

  const addGroups = async (values: SelectionsGroup) => {
    await localStorage.setItem("grupos", JSON.stringify(values));
    router.push('/welcome')
  }
  return (
    <Fragment>
     <Formik
        initialValues={{
          pop: false,
          kpop: false,
          ryb: false,
          hiphop: false,
          trap: false,
          regaeton: false,
          rap: false,
          urbana: false,
        }}
        onSubmit= { async (values) => {
          let body: any = []
          if(values.pop == true){
            body.push({'name': 'pop'})
          }
          if(values.kpop == true){
            body.push({'name': 'kpop'})
          }
          if(values.ryb == true){
            body.push({'name': 'ryb'})
          }
          if(values.hiphop == true){
            body.push({'name': 'hiphop'})
          }
          if(values.trap == true){
            body.push({'name': 'trap'})
          }
          if(values.regaeton == true){
            body.push({'name': 'regaeton'})
          }
          if(values.rap == true){
            body.push({'name': 'rap'})
          }
          if(values.urbana == true){
            body.push({'name': 'urbana'})
          }
          addGroups(body)
        }}
      >
      {() => (
      <Form>
        <Container>
          <Row>
            {
              MusicaStiles.map((item, index) => (
                <Col xs='6' lg='3' key={index}>
                  <NewComponent checkerbox={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
          <Button variant='dark' type='submit'>Siguiente</Button>
      </Form>
      )}
     </Formik>
    </Fragment>
  );
}

export default SelectionNavs;