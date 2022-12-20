import React, { FC, Fragment } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

type imageProp = {
  img: string
}

const ImagesCustoms: FC<imageProp> = ({img}) => {
  return (
    <Fragment>
      <Container fluid>
        <Row className='d-flex justify-content-center'>
          <Col className='d-flex justify-content-center'>
            <Image src={img} alt='' className="img-fluid"  />
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ImagesCustoms