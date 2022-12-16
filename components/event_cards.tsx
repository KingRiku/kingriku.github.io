import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { genres } from '../data/genres'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const EventCards = () => {
  return (
    <Fragment>
      {
        genres.map((item, index) => (
          <Col key={index} xs='12' className='d-flex justify-content-center'>
              <Card style={{ width: '30rem' }} className='mb-2 shadow'>
                <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold' }}>{item.name}</Card.Header>
                <Card.Img variant="top" src={item.image} style={{ minHeight: '15rem' }} />
                <Card.Body>
                  <Row className='d-flex justify-content-end'>
                    <Col xs='2'>
                    
                    <Link href='/collections_lists'>
                        <FontAwesomeIcon style={{ color: '#EE5EC7' }} icon={faHeart} />
                    </Link>
                    </Col>
                    <Col xs='2'>
                      <h4>
                        <FontAwesomeIcon style={{ color: '#84C5EE' }} icon={faCartShopping} />
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text>
                    <strong>{ item.name } :</strong> {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            {/* <Card>
              <Card.Img variant="top" src={item.image} style={{ minHeight: '11rem'}}  />
              <Card.Body>
                <Row>
                  <Col>
                  <Card.Title style={{ fontFamily: 'Garamond',fontWeight: 'bold'}}>{item.name} 
                  </Card.Title> 
                  <Card.Text>Description text</Card.Text>
                  </Col>
                  <Col xs=''>
                    <Row>
                      <Col><small className="d-flex text-muted justify-content-end"><FontAwesomeIcon style={{ color: '#EE5EC7' }} icon={faHeart} /></small></Col>
                      <Col><small className="d-flex text-muted justify-content-end"><FontAwesomeIcon style={{ color: '#84C5EE' }} icon={faCartShopping} /></small></Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card> */}
          </Col>
        ))
      }
    </Fragment>
  )
}

export default EventCards