import React, { FC, Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { genres } from '../data/genres';
import { genresData, MarkTypes } from './event_cards';
import ImagesCustoms from './images_customs';

type FavProps ={
  images: MarkTypes[]
}

const 
 SideCards: FC<FavProps> = ({images}) => {

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
            <h6>Marcas Favoritas</h6>
          </Col>
          <Col xs='8'>
            <Row>
              {
                images.map((item, index) => (
                  <Col key={index} xs={tamaño[index]}>
                    <ImagesCustoms img={item.id} />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
    </Fragment>
  )
}

export default SideCards
