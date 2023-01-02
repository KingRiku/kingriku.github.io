import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import Layout from '../components/utils/layout'
import { faCashRegister, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { genres } from '../data/genres'
import ItemCard from '../components/item_card'
import { genresData } from '../components/event_cards'
import { arrayCollection } from './artist_closet/[name]/[id]'

const ShopingBar = () => {

  // const SumCont =  () => {
  //   setContador(contador + 1)
  // }
  // const RestCont =  () => {
  //   setContador(contador - 1)
  // }
  const [iktemsAdded, setItemsAdded] = useState<arrayCollection[]>([])
  useEffect(() => {
    const storage = sessionStorage.getItem("cart_list");
    if(storage !==  null) {
      const collection = JSON.parse(storage)
      setItemsAdded(collection)
    }
  }, [])

  return (
    <Layout>
      <Container className='mt-3 pt-3' style={{height: '80vh', overflowY: 'scroll'}}>
        <Row>
          <Col xs='12' className='pt-3 d-flex justify-content-center'>
            <h4><strong>Carrito de compras</strong></h4>
          </Col>
        </Row>
        <Row className='mb-3'>
          {
            iktemsAdded.map((item: arrayCollection, index: number) => (
              <Col xs='6' key={index}>
                <ItemCard items={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
      <Container>
      <Row>
          {/* <Col xs='6' className='d-flex justify-content-center'>
            <Button
                size='lg'
                className='mb-3'
                variant='dark'
              >
                Eliminar <FontAwesomeIcon  style={{ color: '#ffff' }} size='lg' icon={faTrash} />
            </Button>
          </Col> */}
            <Col xs='12' className='d-flex justify-content-center'>
            <Button
                size='lg'
                className='mb-3'
                variant='dark'
              >
                Pagar <FontAwesomeIcon  style={{ color: '#ffff' }} size='lg' icon={faCashRegister} />
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ShopingBar