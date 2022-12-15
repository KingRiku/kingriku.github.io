import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import Header from '../../components/header'
import { artist } from '../../../data/artist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ArtistPage = () => {
  const router = useRouter()
  const name = router.query.name as string
  return (
    <Fragment>
      <Header/>
      <h1>Artist: {name}</h1>
      <Row>
        <Col xs='6'>
          <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            <Card.Img src={artist?.find(e => e.name === name)?.image}></Card.Img>
          </Card>
        </Col>
        <Col xs='6'>
          <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            <Card.Img src={artist?.find(e => e.name === name)?.image}></Card.Img>
          </Card>
          {/* <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            <Card.Img variant="top"></Card.Img>
            <Card.Body>
              <Row>
                <Col xs='12'>
                  <h6>Atuendo Primavera</h6>
                </Col>
                <Col xs='12'>
                  <h6>tallas: s/m/xl</h6>
                </Col>
                <Col>
                  <FontAwesomeIcon style={{ color: '#EE5EC7' }} icon={faHeart} />
                  <FontAwesomeIcon style={{ color: '#84C5EE' }} icon={faCartShopping} />
                </Col>
              </Row>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
    </Fragment>
  )
}

export default ArtistPage