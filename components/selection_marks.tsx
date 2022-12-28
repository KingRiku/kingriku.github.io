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
  puma?: boolean
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
          puma: false,
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
          if(values.puma == true){
            body.push({'name': 'puma'})
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
            {
               Marcas.map((item, index) => (
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

export default SelectionMarks;