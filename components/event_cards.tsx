import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import { genres } from '../data/genres'
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
// import { genres } from '../data/genres.json'

type MarkTypes = {
  id: number;
  name: string;
  image: string;
  desc: string;
  fav: boolean
}

const EventCards = () => {
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(false);
  // const [text, setText] = useState(JSON.stringify(ModifierJson, null, 2));

  const onHeartClick = async (item: MarkTypes) => {
    const body =  {
      id: item.name,
      name: item.name,
      image: item.image,
      desc: item.desc,
      fav: true
    }
    setClicked(!clicked);
    
  };
  // console.log(clicked)
  return (
    <Fragment>
      <Form>
        <Col>
        {
          genres.map((item, index) => (
            <Col key={index} xs='12' className='d-flex justify-content-center'>
              <Card style={{ width: '30rem' }} className='mb-2 shadow'>
                <Card.Header style={{ backgroundColor: '#ffff', fontFamily: 'Garamond',fontWeight: 'bold' }}>{item.name}</Card.Header>
                <Card.Img variant="top" src={item.image} style={{ minHeight: '15rem' }} />
                <Card.Body>
                  <Row className='d-flex justify-content-end'>
                    <Col xs='2' className='d-flex'>
                    <Button
                      style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                      onClick={() => onHeartClick(item)}>
                      {clicked ? <FontAwesomeIcon style={{ color: '#EE5EC7' }} size='lg' icon={faHeart} />: <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faHeart} />}
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
                      onClick={() => onHeartClick(item)}>
                        <FontAwesomeIcon style={{ color: '#000000' }} size='lg' icon={faCartShopping} />
                      </Button>
                    </Col>
                  </Row>
                  <Card.Text>
                    <strong>{ item.name } :</strong> {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
        </Col>
      </Form>
  </Fragment>
  )
}

export default EventCards