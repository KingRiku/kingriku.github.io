import React, { ChangeEvent, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap'
import Layout from '../components/utils/layout'
// import { all_comments } from '../data/all_comments'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



type comment = {
  img: string,
  name: string,
  connection: string,
  comment: string,
}

const Comments = () => {
  const [comments, setComments] = useState<comment[]>([
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 1',
        connection: '59 min',
        comment: 'comentario 1',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 2',
        connection: '59 min',
        comment: 'comentario 2',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 3',
        connection: '59 min',
        comment: 'comentario 3',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 4',
        connection: '59 min',
        comment: 'comentario 4',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 5',
        connection: '59 min',
        comment: 'comentario 5',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 6',
        connection: '59 min',
        comment: 'comentario 6',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 7',
        connection: '59 min',
        comment: 'comentario 7',
      },
      {
        img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
        name:'Usuario 8',
        connection: '59 min',
        comment: 'comentario 8',
      },
    ]
  )
  const [newComment, setNewComment] = useState('')
  const onChangeMethod = (event: any) => {
    setNewComment(event.target.value)
  }
  const UploadComment = (value: string) => {
    const body: comment = {
      img: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
      name:'User 1',
      connection: 'now',
      comment: value,
    }
    setComments(comments => [...comments, body])
  }
  return (
    <Layout>
      <Container className='mt-3' style={{ backgroundColor: '#ffff' }}>
        {
          comments.map((item, index) => (
            <Row key={index} className='pt-2 '>
              <Col xs='2'lg='2' style={{minHeight: '3rem'}}>
                <Image src={item.img} height='50rem'></Image>
              </Col>
              <Col xs='10'lg='10' className='pb-2'>
                <Row>
                  <Col xs='10'lg='10'>
                    <h6><strong>{item.name}</strong> <small>{item.connection}</small></h6> 
                  </Col>
                  <Col xs='10'lg='10'>
                    <h6>{item.comment}</h6>
                  </Col>
                </Row>
              </Col>
              <hr />
            </Row>
          ))
        }
      </Container>
      <Container>
        <Row className='pt-2 d-flex align-items-center' style={{ }}>
            <Col xs='10'>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
                onChange={(e) => onChangeMethod(e)}
              >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
            </Col>
            <Col xs='2'>
              <Button
                size='lg'
                className='mb-3'
                style={{backgroundColor: 'transparent', borderColor: 'transparent', padding: '0'}}
                onClick={() => UploadComment(newComment)}
              >
                <FontAwesomeIcon style={{ color: '#7EBBD5' }} size='lg' icon={faPaperPlane} />
              </Button>
            </Col>
          </Row>
      </Container>
    </Layout>
  )
}

export default Comments