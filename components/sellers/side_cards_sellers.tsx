import Link from 'next/link'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MarkTypes } from '../event_cards'
import ImagesCustomsSellers from './image_customs_sellers'

type FavProps ={
  images: MarkTypes[]
}

const 
 SideCardsSellers: FC<FavProps> = ({images}) => {
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
      <Container style={{ backgroundColor: '#ffff'}}>
       <Row
          className='pt-2'
        // style={{ borderLeft:'1px', color:'#RG3477', borderBottom: '2px solid #000000' }}
        >
          <Col xs='4' className='d-flex align-items-center'>
            <Link href={'seller/Intercambios Favoritos'}>
              <h5><strong>Cambios Favoritos</strong></h5>
            </Link>
          </Col>
          <Col xs='8'>
            <Row>
              {
                img.map((item, index) => (
                  <Col key={index} xs={tamaño[index]}>
                    <ImagesCustomsSellers img={item.id} name={'Sellers'} />
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

export default SideCardsSellers
