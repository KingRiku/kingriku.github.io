import { useRouter } from 'next/router'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { artist } from '../../../data/artist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../../components/utils/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ArtistPage = () => {
  const router = useRouter()
  const name = router.query.name as string
  return (
    <Layout>
      {/* <Header/> */}
      <Row className='mt-2 mb-2'>
        <Col xs='12' lg='12' className='d-flex justify-content-center'>
          <h1>Artist: {name}</h1>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs='6'>
          <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            {/* <Card.Img src={artist?.find(e => e.name === name)?.image}></Card.Img> */}
          </Card>
        </Col>
        <Col xs='6' className='d-flex align-items-center'>
          <Row>
            <Col xs='12' className='d-flex justify-content-end mb-2'>
              <Button
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                  <FontAwesomeIcon style={{ color: '#7EBBD5' }} size='lg' icon={faHeart} />
              </Button>
            </Col>
            <Col xs='12' className='d-flex justify-content-end m-2'>
              <Button
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                  <FontAwesomeIcon style={{ color: '#EBD713' }} size='lg' icon={faCartShopping} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr style={{ border: '1px solid', color: '#EBD713' }}/>
      <Row className='mb-3'>
        <Col xs='6'>
          <Card style={{minHeight: '10rem', maxHeight:'10rem'}}>
            {/* <Card.Img src={artist?.find(e => e.name === name)?.image ?? ''}></Card.Img> */}
          </Card>
        </Col>
        <Col xs='6' className='d-flex align-items-center'>
        <Row>
            <Col xs='12' className='d-flex justify-content-end mb-2'>
              <Button
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                  <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='lg' icon={faHeart} />
              </Button>
            </Col>
            <Col xs='12' className='d-flex justify-content-end m-2'>
              <Button
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}>
                  <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faCartShopping} />
              </Button>
            </Col>
          </Row>
        </Col>
        
      </Row>
      <Row className='mb-3'>
        <Col xs='6' style={{backgroundColor: '#f5f5f5'}}>
          chao          
        </Col>
        <Col xs='6' style={{backgroundColor: '#f2f2f2'}}>
          hola
        </Col>
        
      </Row>
      <hr style={{ border: '1px solid', color: '#EBD713' }}/>
    </Layout>
  )
}

export default ArtistPage