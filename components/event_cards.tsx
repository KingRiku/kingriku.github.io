import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { genres } from '../data/genres'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
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
  const [liked, setLiked] = useState([]);
  const [clicked, setClicked] = useState();
  // const [text, setText] = useState(JSON.stringify(ModifierJson, null, 2));

  const onHeartClick = async (item: MarkTypes) => {
    const prebody = []
    const body: MarkTypes =  {
      id: item.id,
      name: item.name,
      desc: item.desc,
      fav: true
    }
    console.log(body)
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
        console.log('repetido gg eazuy')
      }

    }
  };
  useLayoutEffect(() => {
    const storage = sessionStorage.getItem("Artist_list");
    if(storage ==  null) {
      setLiked([])
    } else {
      const gatito = JSON.parse(storage ?? '')
      setLiked(gatito)
    }
  }, [])
  
  console.log(liked)
  return (
    <Fragment>
      <Form>
        <Row>
          <Col xs='12' className='d-flex justify-content-center'>
            <Card style={{ width: '30rem' }} className='mb-2 shadow'>
              <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold' }}>{genres.name}</Card.Header>
              <Card.Img variant="top" src={genres.image} style={{ minHeight: '15rem' }} />
              <Card.Body>
                <Row className='d-flex justify-content-end'>
                  <Col xs='2' className='d-flex'>
                  <Button
                    name={genres.name}
                    type='button'
                    style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                    onClick={() => onHeartClick(genres)}>
                    {liked.filter( (q: MarkTypes) => (q.id === genres.id) ).length < 1 ? <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faHeart} />: <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='lg' icon={faHeart} />}
                    {/* <Icon name={`${clicked ? "heart-fill" : "heart"}`}></Icon> */}
                  </Button>
                  {/* <HearthCheckbox genres={item.name}/> */}
                  {/* <Link href='/collections_lists'>
                      <FontAwesomeIcon style={{ color: '#EE5EC7' }} icon={faHeart} />
                  </Link> */}
                  </Col>
                  <Col xs='2'>
                  <Button
                    style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                    onClick={() => onHeartClick(genres)}>
                      <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faCartShopping} />
                    </Button>
                  </Col>
                </Row>
                <Card.Text>
                  <strong>{ genres.name } :</strong> {genres.desc}
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