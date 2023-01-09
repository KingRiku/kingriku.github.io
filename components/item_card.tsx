import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { clothes } from '../data/artist_clothes'
import { genres } from '../data/genres'
import { arrayCollection } from '../pages/artist_closet/[name]/[id]'
// import { genresData } from './event_cards_sellers'

type itemsProps = {
  items: arrayCollection
}

const ItemCard: FC<itemsProps> = ({items}) => {
  const [contador, setContador] = useState<number>(1);
  const [otems, setItems] = useState<arrayCollection>()

  useEffect(() => {
    for (const col of clothes){
      for (const c of col.arrayImages){
        if(c.id == items.id && c.name === items.name)
          setItems(c)
      }
    }
  }, [])
  
  return (
    <Container className='mt-3 shadow' style={{ backgroundColor: '#ffff' }}>
    <Row>
      <Col xs='12' className='d-flex justify-content-center'>
        <Row>
          <Card className='p-2 mb-' style={{height: '12rem'}}>
            <Card.Img src={otems?.img} style={{ maxHeight: '8rem', minHeight: '8rem' }}></Card.Img>
            {/* <Image src={otems?.image}></Image> */}
            <Card.Body className='d-flex justify-content-center' style={{ maxHeight: '2rem', minHeight: '2rem' }}>
              <p >{otems?.marca.slice(0, 10)} ...</p>
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