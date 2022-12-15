import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewComponent from '../../components/checktester'
import { Marcas } from '../../data/marcas'

const Initform = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          {
            Marcas.map((item, index) => (
              <Col xs='6' lg='3' key={index}>
                <NewComponent checkerbox={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Fragment>
  )
}

export default Initform