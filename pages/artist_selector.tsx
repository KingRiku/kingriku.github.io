import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SideCard from '../components/side_card'
import { artist } from '../data/artist'

type SelectionsGroup = {
  bts: boolean
  badbunny: boolean
  billieeilish: boolean
  harrystyles: boolean
  maneskin: boolean
  jbalbin: boolean
  theweeknd: boolean
  arianagrande: boolean
}

const ArtistSelector: NextPage = () => {
  const router = useRouter()
  const [first, setfirst] = useState<SelectionsGroup>()

  const addGroups = async (values: SelectionsGroup) => {
    await localStorage.setItem("marks", JSON.stringify(values));
    router.push('/artist_selector')
  }

  const script = () => {
    // const marcas: SelectionsGroup[] = []
    // const fruits = ["prada", "saintlauren", "luisvutton", "miumiu", "converse", "dior", "skoot", "burbery"];
    const marcas = (JSON.parse(localStorage.getItem('marks') as string))
    // const grupos = localStorage.getItem('grupos')
    // console.log(marcas)
    // let body: any= []
    // switch (marcas) {
    //   case 0:
    //     if(marcas.prada === true){
    //       body.append(marcas.prada)
    //     }
    //   break;
    // }
    // console.log(body)
    // artist.filter
  }

  useEffect(() => {
    script()
  }, [])
  
  return (
    <Fragment>
       <Formik
        initialValues={{
          bts: false,
          badbunny: false,
          billieeilish: false,
          harrystyles: false,
          maneskin: false,
          jbalbin: false,
          theweeknd: false,
          arianagrande: false,
        }}
        onSubmit= { async (values) => {
          console.log(values)
          // addGroups(values)
        }}
      >
      {() => (
      <Form>
        <Container>
          <Row>
            <Col xs='12'>
              <h4 style={{ textAlign: 'justify' }}><strong>Hemos encontrado estos artistas que pueden ser de tu interés:</strong></h4>
            </Col>
          </Row>
          <Row>
            {
              artist.map((item, index) => (
                <Col className='mb-3' key={index}>
                  <SideCard selections={item} />
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
  )
}

export default ArtistSelector
