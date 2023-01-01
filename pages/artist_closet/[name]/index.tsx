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

export interface ILogo {
  //   image: HTMLImageElement;
  src: string | StaticImageData;
  className?: string;
}

const ArtistPage: FC<ILogo>  = () => {
  const router = useRouter()
  const name = router.query.name as string
  const [clicked, setClicked] = useState<boolean>()
  const [closetByArtist, setClosetByArtist] = useState<any[]>([])
  const onHeartClick = async () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const body = []
    for (const clo of clothes){
      if (clo.fname === name) {
        // console.log(clo)
        body.push(clo)
      }
    }
    setClosetByArtist(body)
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
                    <p><strong> {name}</strong><br/> 
                    </p>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col xs='6'>
                    <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
                      {/* <Image src={item.img}></Image> */}
                      {/* <div className="container flex justify-between h-16 max-w-full bg-pink-400 h-100px"> */}
                        <Card.Img className="object-cover"  src={item.img}></Card.Img>
                        {/* <Card.Img className="object-cover"  src={imoge.src}></Card.Img> */}
                        {/* <Card.Img className="object-cover"  src={'https://drive.google.com/uc?export=view&id=15yrP7qqPHYhoBPm-FVDgU7myXJhiGOCy'}></Card.Img> */}
                      {/* </div> */}
                    </Card>
                  </Col>
                  <Col xs='6' className='d-flex align-items-start'>
                    <Row>
                      <Col xs='12'>
                        {/* <p>artista de {first?.genre}, marca destacada {first?.marcas}, colección N{id}</p> */}
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
              </div>
            ))
          }
        </Container>
      ))}
    </Layout>
  )
}

export default ArtistPage