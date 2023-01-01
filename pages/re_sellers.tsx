import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EventCardsSellers from '../components/event_cards_sellers'
import Histories from '../components/histories'
import Layout from '../components/utils/layout'
import { sellers } from '../data/another.seallers'
import { artist as ortors } from '../data/artist'


const Home = () => {
  const [artist, setArtist] = useState<any[]>([])
  const [artistas, setArtistas] = useState<any[]>([])
  const [marcas, setMarcas] = useState<any[]>([])
  const [marks, setMarks] = useState<any[]>([])

  const script = async () => {
    const artist = await (JSON.parse(localStorage.getItem('artist') as string) ?? '')
    const marks = await (JSON.parse(localStorage.getItem('marks') as string) ?? '')
    setArtist(artist)
    setMarks(marks)
  }

  useEffect(() => {
    script()
  }, [])

  // useEffect(() => {
    
  // }, [])
  

  // useEffect(() => {
  //   let body = []
  //   for(let cos of artist) {
  //     for(let art of ortors){
  //       if(art.fname == cos.name) {
  //         body.push(art)
  //       }
  //     }
  //   }
  //   let bedy = []
  //   for(let mar of marks) {
  //     for(let gen of genres){
  //       if(gen.fname == mar.name) {
  //         console.log(gen)
  //         bedy.push(gen)
  //       }
  //     }
  //   }
  //   setMarcas(bedy)
  //   let unique = body.filter((v, i, a) => a.indexOf(v) === i)
  //   setArtistas(unique)
  // }, [artist])
  // console.log(marcas)
  return (
    <Layout>
        <Container>
          <Row>
            <Col xs='12' sm='12' md='12' lg='12' className='d-flex justify-content-center mb-1 mt-3'>
              <h5 style={{ fontWeight: 'bold'}}>Salon de ventas</h5>
            </Col>
            {/* <Col xs='12' sm='12' md='12' lg='12'>
              <Histories artist={artistas} />
            </Col> */}
          </Row>

          <Row>
            {
              sellers.map((item, index) => (
                <Col xs='12' lg='12' key={index}>
                  <EventCardsSellers genres={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
    </Layout>
  )
}

export default Home