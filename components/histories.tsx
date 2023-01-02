import Link from 'next/link'
import React, { Fragment, FC } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
// import { artist } from '../data/artist' 

type ArtistProps = {
  artist: any[]
}

const Histories: FC<ArtistProps> = ({artist}) => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs='12' className='d-flex' style={{ overflowX: 'scroll' }}>
            {
              artist.map((item, index) => (
                <Col key={index} xs='4'>
                    <Link href={`/artist_closet/${item.name}`}>
                      <Image key={index} src={item.image[0].img} alt='' style={{ maxHeight:'100px', maxWidth:'100px', minHeight:'100px', minWidth:'100px', padding: '.5rem' }} className='d-flex image-responsive' roundedCircle/>
                    </Link>
                  <Card.Body className='d-flex justify-content-center'>
                    <h6 style={{ overflow: 'hidden', position: 'relative', whiteSpace: 'nowrap', maxWidth: '100px'}}>{item.name}</h6>
                  </Card.Body>
                </Col>
              ))
            }
          </Col>
        </Row>
        <hr/>
      </Container>
    </Fragment>
  )
}

export default Histories