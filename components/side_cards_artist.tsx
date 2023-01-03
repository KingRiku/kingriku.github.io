import Link from 'next/link';
import React, { FC, Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import { genres } from '../data/genres';
import { genresData, MarkTypes } from './event_cards';
import ImagesCustomsArtist from './images_customs_artists';

type FavProps ={
  images: MarkTypes[]
}

const 
 SideCardsArtists: FC<FavProps> = ({images}) => {
  const [img, setImg] = useState<any[]>([])

  const tamaño: any = [
    '12',
    '6',
    '6'
  ]

  useEffect(() => {
    let body = []
    if(images.length > 0) {
      for (const img of images) {
        if(body.length > 0){
        } else {
          body.push(img)
        }
      }
      setImg(body)
    }else {
      setImg(images)
    }
  }, [images])

  return (
    <Fragment>
      <Container style={{backgroundColor: '#ffff'}}>
        <Row 
          className='pt-2'
        // style={{ borderLeft:'1px', color:'#RG3477', borderBottom: '2px solid #000000' }}
        >
          <Col xs='4' className='d-flex align-items-center'>
            <Link href={`/prendas/Prendas Favoritos`}>
              <h5>Prendas Favoritos</h5>
            </Link>
          </Col>
          <Col xs='8'>
            <Row>
              {
                img.map((item, index) => (
                  <Col key={index} xs={tamaño[index]}>
                    <ImagesCustomsArtist imger={item.id} name={item.name} />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default SideCardsArtists
