import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import EventCardsSellers from '../components/event_cards_sellers'
import Histories from '../components/histories'
import Layout from '../components/utils/layout'
import { sellers } from '../data/another.seallers'
import { artist as ortors } from '../data/artist'
import { clothes } from '../data/artist_clothes'
import { arrayCollection } from './artist_closet/[name]/[id]'


const Home = () => {
  const [artist, setArtist] = useState<any[]>([])
  const [marks, setMarks] = useState<any[]>([])
  const [sellers, setSellers] = useState<any[]>([])

  const script = async () => {
    const artist = await (JSON.parse(localStorage.getItem('artist') as string) ?? '')
    const marks = await (JSON.parse(localStorage.getItem('marks') as string) ?? '')
    setArtist(artist)
    setMarks(marks)
  }

  useEffect(() => {
    script()
    let body = []
    for(const clo of clothes){
      if(clo.fname === 'Sellers'){
        for(let c of clo.arrayImages){
          if(c.id === 1 || c.id === 2 || c.id === 3) {
            body.push(c)
          }
        }
      }
    }
    setSellers(body)
  }, [])
  
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

          {
            sellers.map((item, index) => (
              <Row key={index}>
                {/* {
                  item.map((item: arrayCollection, index: number) => ( */}
                    <Col xs='12' lg='12' key={index}>
                      <EventCardsSellers genres={item} />
                    </Col>
                  {/* ))
                } */}
              </Row>
              ))
            }
        </Container>
    </Layout>
  )
}

export default Home