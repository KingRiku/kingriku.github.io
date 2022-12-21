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
  // useLayoutEffect(() => {
  //   let body = []
  //   for (let i of images) {
  //     if(cosito.filter(e => e.id === i.id)) {
  //       console.log('yo soy',genres)
  //       body.push(genres)
  //     }
  //   }
  //   setfirst(body)
    // for (let gen of cosito){
    //   console.log(images.filter((e: MarkTypes) => (e.id === gen.id)))
    //   if(images.filter((e: MarkTypes) => (e.id === gen.id)).length < 1){
    //     console.log('soyugen',gen)
    //   }else {
    //     console.log('nosoy')
    //   }
    // }
    // if(genres.filter(e => (e.id == images.id)).length < 1) {
    //   const images = genres

    //   console.log(images)
    // }
  // }, [first])
  
  return (
    <Fragment>
        <Row style={{ borderLeft:'1px', color:'#RG3477', borderBottom: '2px solid #000000' }}>
          <Col xs='4' className='d-flex align-items-center'>
            <h6>Favoritos</h6>
          </Col>
          <Col xs='8'>
            <Row>
              {
                images.map((item, index) => (
                  <Col key={index} xs={tamaño[index]}>
                    <ImagesCustoms img={item} />
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

{/* <Row>
<Col>
  <h6>Añadidos recientemente</h6>
</Col>
<Col>
  <Card.Img variant="" src="holder.js/100px180" ></Card.Img>
</Col>
</Row> */}