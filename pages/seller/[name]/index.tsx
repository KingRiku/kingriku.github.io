import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../../components/utils/layout'
import { clothes } from '../../../data/artist_clothes'

const Favourites = () => {
  const router = useRouter()
  const name = router.query.name as string
  const [marcas, setMarcas] = useState<any[]>([])

  useEffect(() => {
    let bedy = []
    const storageMarks = sessionStorage.getItem("Seller_list");
    const storage = JSON.parse(storageMarks ?? '')
    console.log(storage)
    for (const sto of storage) {
        for(let gen of clothes){
          if(gen.fname === 'Sellers'){
            for (let g of gen.arrayImages){
              console.log(g)
              if(g.name === sto.name && g.id === sto.id) {
                console.log('matches', g)
                bedy.push(g)
              }
            }
          }
      }
    }
    setMarcas(bedy)
  }, [])
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs='12' className='d-flex justify-content-center mb-1 mt-3'>
            <h5>{name}</h5>
          </Col>
        </Row>
      {
        marcas.map((item, index) => (
          <Row key={index}>
            <Col xs='12' className='d-flex justify-content-center'>
              <Card style={{ width: '30rem' }} className='mb-2 shadow'>
                <Link href={`/artist_closet/${item.name}/${item.id}`}>
                  <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold', color: '#000000' }}>{item.name}</Card.Header>
                </Link>
                <Card.Img variant="top" src={item.img} style={{ minHeight: '15rem' }} />
                <Card.Body>
                  <Row className='d-flex justify-content-end'>
                    <Col xs='2' className='d-flex'>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      }
      </Container>
    </Layout>
  )
}

export default Favourites