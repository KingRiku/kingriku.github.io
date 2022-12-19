import { Form, Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react'
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

  useLayoutEffect(() => {
    script()
  }, [])

  useEffect(() => {
    let body = []
    for(let cos of marks) {
      for(let art of artist){
        if(art.fmarcas == cos.name) {
          body.push(art)
        }
      }
    }
    for(let grp of groups) {
      for(let art of artist){
        if(art.style == grp.name) {
          body.push(art)
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
          theweeknd: false,
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
          if(values.theweeknd == true){
            body.push({'name': 'theweeknd'})
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
              <Col xs='12'>
                <h4 style={{ textAlign: 'justify' }}><strong>Hemos encontrado estos artistas que pueden ser de tu interés:</strong></h4>
              </Col>
            </Row>
            <Row>
            {
              artistas.map((item, index) => (
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
      : null
     }
    </Fragment>
  )
}

export default ArtistSelector
