import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../../components/utils/layout'
import { clothes } from '../../../data/artist_clothes'
import { StaticImageData } from 'next/image'
import EventCardsSellers from '../../../components/event_cards_sellers'

export interface ILogo {
  //   image: HTMLImageElement;
  src: string | StaticImageData;
  className?: string;
}

const ArtistClothes: FC<ILogo>  = () => {
  const router = useRouter()
  const name = router.query.name as string
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
          if(c.secondName === name) {
            body.push(c)
          }
        }
      }
    }
    setSellers(body)
  }, [])
  {console.log(sellers)}
  return (
    <Layout>
      <Container >
        <Row>
          <Col xs='12' sm='12' md='12' lg='12' className='d-flex justify-content-center mb-1 mt-3'>
            <h5 style={{ fontWeight: 'bold'}}>Venta fan {name}</h5>
          </Col>
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

export default ArtistClothes