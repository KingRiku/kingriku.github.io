import { Form, Formik } from 'formik'
import { NextPage } from 'next'
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
  beyonce: boolean
  arianagrande: boolean
}

const ArtistSelector: NextPage = () => {
  const router = useRouter()
  const [first, setfirst] = useState<SelectionsGroup>()
  const [marks, setMarks] = useState<any[]>([])
  const [groups, setGroups] = useState<any[]>([])
  const [artistas, setArtistas] = useState<any[]>([])

  const addGroups = async (values: SelectionsGroup) => {
    await localStorage.setItem("artist", JSON.stringify(values));
    router.push('/home')
  }

  const script = async () => {
    const marcas = await (JSON.parse(localStorage.getItem('marks') as string))
    setMarks(marcas)
    const grupos = await (JSON.parse(localStorage.getItem('grupos') as string))
    setGroups(grupos)
  }

  useEffect(() => {
    script()
  }, [])

  useEffect(() => {
    let body = []
    for(let cos of marks) {
      for(let grp of groups) {
        for(let art of artist) {
          for(let fart of art.fmarcas){
            if(art.style == grp.name && cos.name == fart) {
              body.push(art)  
            }
          }
        }
      }
    }

    let unique = body.filter((v, i, a) => a.indexOf(v) === i)
    setArtistas(unique)
  }, [marks])

  return (
    <Fragment>
    {
      marks.length > 0 ?
      <Formik
        initialValues={{
          bts: false,
          badbunny: false,
          billieeilish: false,
          harrystyles: false,
          maneskin: false,
          jbalbin: false,
          beyonce: false,
          arianagrande: false,
        }}
        onSubmit= { async (values) => {
          let body: any = []
          if(values.bts == true){
            body.push({'name': 'bts'})
          }
          if(values.badbunny == true){
            body.push({'name': 'badbunny'})
          }
          if(values.billieeilish == true){
            body.push({'name': 'billieeilish'})
          }
          if(values.harrystyles == true){
            body.push({'name': 'harrystyles'})
          }
          if(values.maneskin == true){
            body.push({'name': 'maneskin'})
          }
          if(values.jbalbin == true){
            body.push({'name': 'jbalbin'})
          }
          if(values.beyonce == true){
            body.push({'name': 'beyonce'})
          }
          if(values.arianagrande == true){
            body.push({'name': 'arianagrande'})
          }
          addGroups(body)
        }}
      >
      {() => (
        <Form>
          <Container>
            <Row>
              <Col xs='12' className='mt-2'>
                <h4 style={{ textAlign: 'justify' }}><strong>Hemos encontrado estos artistas que pueden ser de tu interés:</strong></h4>
              </Col>
            </Row>
            <Row>
              {
                artistas.map((item, index) => (
                  <Col className='mb-3 mt-2' xs='12' sm='12' mg='6' lg='4' key={index}>
                    <SideCard selections={item} />
                  </Col>
                ))
              }
            </Row>
            <Row>
              <Col xs='12' lang='12' className='d-flex justify-content-end mb-3'>
                <Button variant='dark' type='submit'>Siguiente</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
      </Formik>
      : null
     }
    </Fragment>
  )
}

export default ArtistSelector
