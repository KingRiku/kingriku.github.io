import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { genres } from '../data/genres'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { collectionLiked } from '../pages/artist_closet/[name]/[id]'
// import { genres } from '../data/genres.json'

export type MarkTypes = {
  id: number;
  name: string;
  desc: string;
  fav: boolean
}
export type genresData ={
  id: number,
  name: string,
  fav: boolean,
  image: string,
  desc: string,
}
type genresProps = {
  genres: genresData
} 

const EventCards: FC<genresProps> = ({ genres }) => {
  const [clicked, setClicked] = useState<boolean>();

  const onHeartClick = async (item: MarkTypes) => {
    setClicked(true)
    const prebody = []
    const body: MarkTypes =  {
      id: item.id,
      name: item.name,
      desc: item.desc,
      fav: true
    }
    const storage = sessionStorage.getItem("Artist_list");
    if(storage == null){
      prebody.push(body)
      sessionStorage.setItem("Artist_list", JSON.stringify(prebody));
    } else {
      const queso = JSON.parse(storage)
    
      if(queso.filter( (q: MarkTypes) => (q.id === body.id) ).length < 1){
        queso.push(body)
        sessionStorage.setItem("Artist_list", JSON.stringify(queso));
      } else {
      }

    }
  };
  useEffect(() => {
    const storage = sessionStorage.getItem("Artist_list");
    if(storage == null){
    } else {
      const collection = JSON.parse(storage)
      const items = collection.filter( (q: any) => (q.id === genres.id) )
      for(const i of items){
        setClicked(true)
      }
    }
  }, [])
  
  return (
    <Fragment>
      <Form>
        <Row>
          <Col xs='12' className='d-flex justify-content-center'>
            <Card style={{ width: '30rem' }} className='mb-2 shadow'>
              <Link href={`/marks/${genres.name}`}>
                <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold', color: '#000000' }}>{genres.name}</Card.Header>
              </Link>
              <Card.Img variant="top" src={genres.image} style={{ minHeight: '15rem' }} />
              <Card.Body>
                <Row className='d-flex justify-content-end'>
                  <Col xs='2' className='d-flex'>
                  <Button
                    name={genres.name}
                    type='button'
                    style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                    onClick={() => onHeartClick(genres)}>
                    {clicked ? <FontAwesomeIcon style={{ color: '#7EBBD5' }} size='lg' icon={faHeart} />: <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faHeart} />}
                    {/* <Icon name={`${clicked ? "heart-fill" : "heart"}`}></Icon> */}
                  </Button>
                  </Col>
                </Row>
                <Card.Text>
                  <p><strong>{ genres.name } :</strong> {genres.desc}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
  </Fragment>
  )
}

export default EventCards