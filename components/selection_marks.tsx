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
  prada: boolean
  saintlauren: boolean
  luisvutton: boolean
  miumiu: boolean
  converse: boolean
  dior: boolean
  skoot: boolean
  burbery: boolean
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
          prada: false,
          saintlauren: false,
          luisvutton: false,
          miumiu: false,
          converse: false,
          dior: false,
          skoot: false,
          burbery: false,
        }}
        onSubmit= { async (values) => {
          addGroups(values)
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