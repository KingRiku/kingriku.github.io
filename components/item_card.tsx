import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { genres } from '../data/genres'
import { genresData } from './event_cards_sellers'

type itemsProps = {
  items: genresData
}

const ItemCard: FC<itemsProps> = ({items}) => {
  const [contador, setContador] = useState<number>(1);
  const [otems, setItems] = useState<genresData>()

  console.log(genres)
  useEffect(() => {
    for (const col of genres){
      if(col.id == items.id)
      setItems(col)
    }
  }, [])
  
  return (
    <Container className='mt-3 shadow' style={{ backgroundColor: '#ffff' }}>
    <Row>
      <Col xs='12' className='d-flex justify-content-center'>
        <Row>
          <Card className='p-2 mb-' style={{height: '10rem'}}>
            <Card.Img src={otems?.image}></Card.Img>
            {/* <Image src={otems?.image}></Image> */}
            <Card.Body className='d-flex justify-content-center'>
              <p>{otems?.name}</p>
            </Card.Body>
          </Card>
          <Col xs='4'className='pt-2 pb-2'>
            <Button variant='dark' onClick={() => setContador(contador - 1)}>-</Button>
          </Col>
          <Col xs='4'className='mt-2 d-flex justify-content-center pt-2 pb-2'>
            <h6>{contador}</h6>
          </Col>
          <Col xs='4' className='d-flex justify-content-end pt-2 pb-2'>
            <Button variant='dark' onClick={() => setContador(contador + 1)}>+</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  )
}

export default ItemCard