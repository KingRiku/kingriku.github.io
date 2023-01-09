import { useRouter } from 'next/router'
import React, { use, useEffect, useLayoutEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { artist } from '../../../data/artist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../../components/utils/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { clothes } from '../../../data/artist_clothes'
import { MarkTypes } from '../../../components/event_cards_sellers'

type artistProps = {
  fname: string;
  arrayCollection: {
      id: number;
      name: string;
      marca: string;
      model: string;
      img: string;
  }[];
  arrayImages: {
      id: number;
      name: string;
      marca: string;
      model: string;
      img: string;
  }[];
}

export type arrayCollection = {
  id: number;
  name: string;
  marca: string;
  secondName?: string,
  model: string;
  img: string;
  precio?: string
}

export type collectionLiked = {
  id: string,
  name: string
}

const ClosetNumber = () => {
  const router = useRouter()
  const id = router.query.id as string
  const name = router.query.name as string
  const [first, setfirst] = useState<arrayCollection[]>([])
  const [clicked, setClicked] = useState<boolean>()
  const [cartClicked, setCartClicked] = useState<boolean>();

  const onHeartClick = async () => {
    setClicked(!clicked)
    const prebody = []
    const body: collectionLiked =  {
      id: id,
      name: name,
    }
    const storage = sessionStorage.getItem("collections_liked");
    if(storage == null){
      prebody.push(body)
      sessionStorage.setItem("collections_liked", JSON.stringify(prebody));
    } else {
      const collection = JSON.parse(storage)
      if(collection.filter( (q: collectionLiked) => (q.id === body.id && q.name === body.name) ).length < 1){
        collection.push(body)
        sessionStorage.setItem("collections_liked", JSON.stringify(collection));
      } else {
        console.log('repetido gg eazuy')
      }
    }
  };

  const onShoppingClick = async (item: arrayCollection) => {
    setCartClicked(!cartClicked)
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
    
      if(queso.filter( (q: MarkTypes) => (q.id === body.id) ).length < 1){
        queso.push(body)
        sessionStorage.setItem("cart_list", JSON.stringify(queso));
      } else {
      }
    }
  };

  useEffect(() => {
    let body = []
    for (let art of clothes){
      if(art.fname === name){
        for (const a of art.arrayImages){
          if (String(a.id) === id){
            body.push(a)
          }
        }
      }
    }
    setfirst(body)
    const storage = sessionStorage.getItem("collections_liked");
    if(storage == null){
    }else {
      const collection = JSON.parse(storage)
      const item = collection.filter( (q: collectionLiked) => (q.id === id) )
      if(item[0]?.id === id && item[0]?.name === name){
        setClicked(true)
      } else {
        console.log('nosoy')
      }
    }
    const cart = sessionStorage.getItem("collections_liked");
    if(cart == null){
    }else {
      const collection = JSON.parse(cart)
      console.log(cart)
      const item = collection.filter( (q: collectionLiked) => (q.id === id) )
      if(item[0]?.id === id && item[0]?.name === name){
        setCartClicked(true)
      } else {
        console.log('nosoy')
      }
    }
  }, [id])

  return (
    <Layout>
      {/* <Header/> */}
      <Row className='mt-3 mb-2'>
        <Col xs='12' lg='12' className='d-flex justify-content-center'>
          <h5><strong> {name}</strong></h5>
        </Col>
      </Row>
      <Container style={{ backgroundColor: '#ffff' }} className=' pt-3 pb-1 shadow'>
        <Row className='mb-3' >
          <Col xs='6'>
            <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
              {/* <Card.Img src={first?.image.find(e => e.id === id)?.img}></Card.Img> */}
              <Card.Img src={first[0]?.img} style={{ minHeight:'10rem', maxHeight:'10rem'}}></Card.Img>
            </Card>
          </Col>
          <Col xs='6' className='d-flex align-items-start'>
            <Row>
              <Col xs='12'>
                <p>Marca: {first[0]?.marca}. Colección: {first[0]?.model}. <br/> Valor: {first[0]?.precio}</p>
              </Col>
              <Col xs='6' className='d-flex'>
                <Button
                  onClick={() => onHeartClick()}
                  style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                    { clicked ? <FontAwesomeIcon style={{ color: '#7EBBD5' }} icon={faHeart} />: <FontAwesomeIcon style={{ color: '#000000' }} icon={faHeart} /> }
                </Button>
              </Col>
              <Col xs='6' className='d-flex'>
              <Button
                  onClick={() => onShoppingClick(first[0])}
                  style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                    { cartClicked ? <FontAwesomeIcon style={{ color: '#EBD713' }} icon={faCartShopping} />: <FontAwesomeIcon style={{ color: '#000000' }} icon={faCartShopping} /> }
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr style={{ border: '1px solid', color: '#EBD713' }}/>
    </Layout>
  )
}

export default ClosetNumber