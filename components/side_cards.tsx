import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const SideCards = () => {
  return (
    <Fragment>
      <Card className='p-3'>
        <Row>
          <Col>
            <h6>Favoritos</h6>
          </Col>
          <Col>
            <Card.Img variant="" src="holder.js/100px180" ></Card.Img>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Añadidos recientemente</h6>
          </Col>
          <Col>
            <Card.Img variant="" src="holder.js/100px180" ></Card.Img>
          </Col>
        </Row>
      </Card>
    </Fragment>
  )
}

export default SideCards