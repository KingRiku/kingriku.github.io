import React, { FC, Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { MarkTypes } from '../event_cards'
import ImagesCustomsSellers from './image_customs_sellers'

type FavProps ={
  images: MarkTypes[]
}

const 
 SideCardsSellers: FC<FavProps> = ({images}) => {

  const tamaño: any = [
    '12',
    '6',
    '6'
  ]

  return (
    <Fragment>
        <Row 
        // style={{ borderLeft:'1px', color:'#RG3477', borderBottom: '2px solid #000000' }}
        >
          <Col xs='4' className='d-flex align-items-center'>
            <h6>Intercambios Favoritos</h6>
          </Col>
          <Col xs='8'>
            <Row>
              {
                images.map((item, index) => (
                  <Col key={index} xs={tamaño[index]}>
                    <ImagesCustomsSellers img={item.id} />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
    </Fragment>
  )
}

export default SideCardsSellers
