import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { artist } from '../../../data/artist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../../components/utils/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { clothes } from '../../../data/artist_clothes'
import { StaticImageData } from 'next/image'

import imoge from '../../../assets/harrystyles/gucci polera 3 coleccion ha ha ha 480.000 CLP.png'
import { collectionLiked } from './[id]'
import { stringify } from 'querystring'
import Link from 'next/link'

export interface ILogo {
  //   image: HTMLImageElement;
  src: string | StaticImageData;
  className?: string;
}

const ArtistPage: FC<ILogo>  = () => {
  const router = useRouter()
  const name = router.query.name as string
  const [clicked, setClicked] = useState<boolean>()
  const [clickedShopping, setShoppingClicked] = useState<boolean>()
  const [closetByArtist, setClosetByArtist] = useState<any[]>([])

  const onHeartClick = async () => {
    setClicked(!clicked);
  };
  const onShopingClick = async () => {
    setShoppingClicked(!clickedShopping);
  };

  useEffect(() => {
    const body = []
    for (const clo of clothes){
      if (clo.fname === name) {
        body.push(clo)
      }
    }
    setClosetByArtist(body)
  }, [name])

  useEffect(() => {
    const storage = sessionStorage.getItem("collections_liked");
    if(storage == null){
    }else {
      const collection = JSON.parse(storage)
      for (const col of clothes) {
        for (const c of col.arrayImages) {
          const item = collection.filter( (q: collectionLiked) => (q.id === String(c.id)) )
          for (const i of item) {
            if (i.name == name && i.id === String(c.id)){
              console.log(i)
            }
          }
        }
      }
    }
  }, [name])
  return (
    <Layout>
      {
        closetByArtist.map((item: any, index: number) => (
        <Container key={index}>
          {
            item.arrayImages.map((item: any, index: number) => (
              <div key={index}>
                <Row className='mt-3 mb-2'>
                  <Col xs='12' lg='12' className='d-flex justify-content-center'>
                  <h5><strong> {name}</strong></h5>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col xs='6'>
                    <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
                      <Card.Img className="object-cover"  src={item.img} style={{minHeight: '10rem', maxHeight:'10rem'}}></Card.Img>
                    </Card>
                  </Col>
                  <Col xs='6' className='d-flex align-items-start'>
                    <Row>
                      <Col xs='12'>
                        <p>marca: {item.marca}, Modelo: {item.model}</p>
                      </Col>
                      <Col xs='12'>
                        <Link href={`/artist_closet/${name}/${index + 1}`}>
                          <p>ver mas...</p>
                        </Link>
                      </Col>
                      {/* <Col xs='6' className='d-flex'>
                        <Button
                          onClick={() => onHeartClick()}
                          style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                            { clicked ? <FontAwesomeIcon style={{ color: '#7EBBD5' }} icon={faHeart} />: <FontAwesomeIcon style={{ color: '#000000' }} icon={faHeart} /> }
                        </Button>
                      </Col> 
                      <Col xs='6' className='d-flex'>
                        <Button
                          onClick={() => onShopingClick()}
                          style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                            { clickedShopping ? <FontAwesomeIcon style={{ color: '#EBD713' }} icon={faCartShopping} />: <FontAwesomeIcon style={{ color: '#000000' }} icon={faCartShopping} /> }
                        </Button>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
                <hr style={{ border: '1px solid', color: '#EBD713' }}/>
              </div>
            ))
          }
        </Container>
      ))}
    </Layout>
  )
}

export default ArtistPage