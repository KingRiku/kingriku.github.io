import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Layout from '../../../components/utils/layout'
import { genres } from '../../../data/genres'

const Favourites = () => {
  const router = useRouter()
  const name = router.query.name as string
  const [marcas, setMarcas] = useState<any[]>([])
  const [marks, setMarks] = useState<any[]>([])

  useEffect(() => {
    let bedy = []
    const storageMarks = sessionStorage.getItem("Artist_list");
    const storage = JSON.parse(storageMarks ?? '')
    console.log(storage)
    for (const sto of storage) {
        for(let gen of genres){
          console.log(gen)
          if(gen.name == sto.name && gen.id === sto.id) {
            bedy.push(gen)
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
                <Link href={`/marks/${item.name}`}>
                  <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold', color: '#000000' }}>{item.name}</Card.Header>
                </Link>
                <Card.Img variant="top" src={item.image} style={{ minHeight: '15rem' }} />
                {/* <Image src={item.image} alt='img' width='100' height={'100'} ></Image> */}
                <Card.Body>
                  <Row className='d-flex justify-content-end'>
                    <Col xs='2' className='d-flex'>
                    </Col>
                  </Row>
                  <Card.Text>
                    <strong>{ item.name } :</strong> {item.desc}
                  </Card.Text>
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