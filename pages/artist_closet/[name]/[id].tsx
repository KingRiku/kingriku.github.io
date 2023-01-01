import { useRouter } from 'next/router'
import React, { use, useEffect, useLayoutEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { artist } from '../../../data/artist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../../components/utils/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'

type artistProps = {
  name: string
  genre: string
  fname: string
  style: string
  image: {
      id: string,
      img: string,
    }[],
  fmarcas: string[]
  marcas: string[]
}

type collectionLiked = {
  id: string,
  name: string
}

const ClosetNumber = () => {
  const router = useRouter()
  const id = router.query.id as string
  const name = router.query.name as string
  const [first, setfirst] = useState<artistProps>()
  const [clicked, setClicked] = useState<boolean>()

  const onHeartClick = async () => {
    setClicked(!clicked)
    const prebody = []
    const body: collectionLiked =  {
      id: id,
      name: name,
    }
    // console.log(body)
    const storage = sessionStorage.getItem("collections_liked");
    if(storage == null){
      prebody.push(body)
      sessionStorage.setItem("collections_liked", JSON.stringify(prebody));
    } else {
      const collection = JSON.parse(storage)
      if(collection.filter( (q: collectionLiked) => (q.id === body.id) ).length < 1){
        collection.push(body)
        sessionStorage.setItem("collections_liked", JSON.stringify(collection));
      } else {
        console.log('repetido gg eazuy')
      }
    }
  };

  useEffect(() => {
    for (let art of artist){
      if(art.name === name){
        console.log(art)
        setfirst(art)
      }
    }
    const storage = sessionStorage.getItem("collections_liked");
    if(storage == null){
      console.log(storage)
    }else {
      const collection = JSON.parse(storage)
      console.log(collection)
      const item = collection.filter( (q: collectionLiked) => (q.id === id) )
      console.log('yo',item)
      if(item[0]?.id === id && item[0]?.name === name){
        setClicked(true)
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
          <p><strong> {name}</strong><br/>
           Colección: {id}</p>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs='6'>
          <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            <Card.Img src={first?.image.find(e => e.id === id)?.img}></Card.Img>
          </Card>
        </Col>
        <Col xs='6' className='d-flex align-items-start'>
          <Row>
            <Col xs='12'>
              <p>artista de {first?.genre}, marca destacada {first?.marcas}, colección N{id}</p>
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
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                  <FontAwesomeIcon style={{ color: '#EBD713' }} icon={faCartShopping} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr style={{ border: '1px solid', color: '#EBD713' }}/>
    </Layout>
  )
}

export default ClosetNumber