import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { artist } from '../../data/artist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const SideCard = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
        {
        artist.map((item, index) => (
          <div key={index} className="card flex-row mb-3 shadow pt-2 pb-2">
            <img className="card-img-left example-card-img-responsive" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{width: '10rem'}}/>
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">{item.name}</h4>
              <p className="card-text">{item.marcas.join(', ')}</p>
              <div className='d-flex justify-content-end'>
                <button className='btn btn-primary-outline' style={{ backgroundColor: 'transparent' }}> <strong>Agregar</strong> <FontAwesomeIcon style={{ color: '#black' }} icon={faPlus} /> </button>
              </div>
            </div>
          </div>
          // <Col xs='12' key={index} className='mb-3 shadow' style={{ height:'10rem' }}>
          //   {<Row>
          //     <Col xs='6'>
          //       <Image src={item.image} style={{ maxHeight:'10rem' }} alt=''></Image>
          //     </Col>
          //     <Col xs='6'>
          //       <Row className='p-2 d-flex justify-content-center'>
          //         <Col xs='12' sm='12' md='12' lg='12'>
          //           <h6><strong>{item.name}</strong></h6>
          //         </Col>
          //         <Col xs='12' sm='12' md='12' lg='12' className='d-flex'>
          //           <p style={{textAlign: 'justify', whiteSpace: 'initial'}}>{item.marcas.join(',')}</p>
          //         </Col>
          //         <Col xs='12' sm='12' md='12' lg='12' className='d-flex justify-content-end align-items-end'>
          //           <Button variant='dark pt-0 pb-1'>Agregar</Button>
          //         </Col>
          //       </Row>
          //     </Col>
          //   </Row> */}
          //   {<Card
          //     key={'light'}
          //     text={'dark'}
          //     className="mb-2 shadow"
          //   >
          //     <Row>
          //       <Col xs='6' className='d-flex'>
          //         <Card.Img src={item.image}></Card.Img>
          //       </Col>
          //       <Col xs='6'>
          //         <Card.Body>
          //             <p>Marcas utilizadas:</p>
          //             <p>{item.marcas.join(',')}</p>
          //           <Card.Text className='d-flex justify-content-end'>
          //             <Button variant='dark pt-0 pb-1'>agregar</Button>
          //           </Card.Text>
          //       </Card.Body>
          //       </Col>
          //     </Row>
          //   </Card>
          // </Col>
        ))
      }
        </Row>
      </Container>
    </Fragment>
  )
}

export default SideCard