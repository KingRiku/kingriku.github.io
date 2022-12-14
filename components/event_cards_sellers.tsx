import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { faHeart, faCartShopping, faComment } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { arrayCollection } from '../pages/artist_closet/[name]/[id]'

export type MarkTypes = {
  id: number;
  name: string;
  desc: string;
  fav: boolean
  img?: string
}
export type genresData ={
  id: number,
  name: string,
  fav: boolean,
  image?: string,
  desc: string,
}
export type genresProps = {
  genres: arrayCollection
} 

const EventCardsSellers: FC<genresProps> = ({ genres }) => {
  const [clickedHeart, setHeartClicked] = useState<boolean>();
  const [clicked, setCartClicked] = useState<boolean>();
  // const [text, setText] = useState(JSON.stringify(ModifierJson, null, 2));

  const onHeartClick = async (item: arrayCollection) => {
    setHeartClicked(!clickedHeart)
    const prebody = []
    const body: arrayCollection =  {
      id: item.id,
      img: item.img,
      name: item.name,
      marca: item.marca,
      model: item.model,
    }
    const storage = sessionStorage.getItem("Seller_list");
    if(storage == null){
      prebody.push(body)
      sessionStorage.setItem("Seller_list", JSON.stringify(prebody));
    } else {
      const queso = JSON.parse(storage)
    
      if(queso.filter( (q: MarkTypes) => (q.id === body.id) ).length < 1){
        queso.push(body)
        sessionStorage.setItem("Seller_list", JSON.stringify(queso));
      } else {
      }
    }
  };
  useEffect(() => {
    const storage = sessionStorage.getItem("Seller_list");
    if(storage ==  null) {
    } else {
      const collection = JSON.parse(storage)
      const items = collection.filter( (q: any) => (q.id === genres.id) )
      for(const i of items){
        setHeartClicked(true)
      }
    }
  }, [])
  
  const onShoppingClick = async (item: arrayCollection) => {
    setCartClicked(!clicked)
    const prebody = []
    const body: arrayCollection =  {
      id: item.id,
      img: item.img,
      name: item.name,
      marca: item.marca,
      model: item.model,
    }
    const storage = sessionStorage.getItem("cart_list");
    if(storage == null){
      prebody.push(body)
      sessionStorage.setItem("cart_list", JSON.stringify(prebody));
    } else {
      const queso = JSON.parse(storage)
    
      if(queso.filter( (q: arrayCollection) => (q.id === body.id && q.name === body.name) ).length < 1){
        queso.push(body)
        sessionStorage.setItem("cart_list", JSON.stringify(queso));
      } else {
      }
    }
  };
  useEffect(() => {
    const storage = sessionStorage.getItem("cart_list");
    console.log('s', storage)
    if(storage ==  null) {
    } else {
      const collection = JSON.parse(storage)
      const items = collection.filter( (q: any) => (q.id === genres.id && q.name === genres.name) )
      for(const i of items){
        setCartClicked(true)
      }
    }
  }, [])
  return (
    <Fragment>
      <Form>
        <Row>
          <Col xs='12' className='d-flex justify-content-center'>
            <Card style={{ width: '30rem' }} className='mb-2 shadow'>
              <Link href={`/sellers_clothes/${genres.secondName}`}>
                <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold', color: '#000000' }}>{genres.name}</Card.Header>
              </Link>
              <Card.Img variant="top" src={genres.img} style={{ minHeight: '15rem' }} />
              <Card.Body>
                <Row className='d-flex justify-content-end'>
                  <Col xs='2' className='d-flex'>
                  <Button
                    name={genres.name}
                    type='button'
                    style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                    onClick={() => onHeartClick(genres)}>
                    { clickedHeart ? <FontAwesomeIcon style={{ color: '#7EBBD5' }} icon={faHeart} />: <FontAwesomeIcon style={{ color: '#000000' }} icon={faHeart} /> }
                  </Button>
                  </Col>
                  <Col xs='2'>
                  <Link href='/comments'>
                    <Button
                      type='button'
                      style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                      >
                      <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faComment} />
                    </Button>
                  </Link>
                  </Col>
                  <Col xs='2'>
                  <Button
                    style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                    onClick={() => onShoppingClick(genres)}>
                      { clicked ? <FontAwesomeIcon style={{ color: '#EBD713' }} size='lg' icon={faCartShopping} />: <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faCartShopping} /> }
                    </Button>
                  </Col>
                </Row>
                <Card.Text>
                  <strong>{ genres.name } :</strong> {genres.marca}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
  </Fragment>
  )
}

export default EventCardsSellers