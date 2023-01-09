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

type SelectionsGroup = {
  gucci?: boolean
  chanel?: boolean
  luisvutton?: boolean
  adidas?: boolean
  givenchy?: boolean
  dior?: boolean
  skoot?: boolean
  burbery?: boolean
}

function SelectionMarks() {
  const router = useRouter()
  const [first, setfirst] = useState<SelectionsGroup>()

  const addGroups = async (values: SelectionsGroup) => {
    await localStorage.setItem("marks", JSON.stringify(values));
    router.push('/artist_selector')
  }
  return (
    <Fragment>
     <Formik
        initialValues={{
          gucci: false,
          chanel: false,
          luisvutton: false,
          adidas: false,
          givenchy: false,
          dior: false,
          skoot: false,
          burbery: false,
        }}
        onSubmit= { async (values) => {
          let body: any = []
          if(values.gucci == true){
            body.push({'name': 'gucci'})
          }
          if(values.chanel == true){
            body.push({'name': 'chanel'})
          }
          if(values.luisvutton == true){
            body.push({'name': 'luisvutton'})
          }
          if(values.adidas == true){
            body.push({'name': 'adidas'})
          }
          if(values.givenchy == true){
            body.push({'name': 'givenchy'})
          }
          if(values.dior == true){
            body.push({'name': 'dior'})
          }
          if(values.skoot == true){
            body.push({'name': 'skoot'})
          }
          if(values.burbery == true){
            body.push({'name': 'burbery'})
          }
          addGroups(body)
        }}
      >
      {() => (
      <Form>
        <Container>
          <Row>
            <Col className='mb-3 mt-3'>
              <h4><strong>Marcas favoritas:</strong></h4>
            </Col>     
          </Row>
          <Row>
            {
               Marcas.map((item, index) => (
                <Col xs='6' lg='3' key={index}>
                  <NewComponent checkerbox={item} />
                </Col>
              ))
            }
          </Row>
          <Row>
            <Col xs='12' sm='12' mg='12' lg='12' className='d-flex justify-content-end'>
              <Button variant='dark' type='submit'>Siguiente</Button>
            </Col>
          </Row>
        </Container>
      </Form>
      )}
     </Formik>
    </Fragment>
  );
}

export default SelectionMarks;