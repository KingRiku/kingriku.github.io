import React, { FC, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Field } from 'formik'
import Image from 'next/image'

export type FavouriteArtist = {
  name: string,
  genre:  string,
  fname:  string,
  image:  {
    id: string,
    img: string,
  }[],
  marcas: string[]
}

export type FavouriteArtistProps = {
  selections: FavouriteArtist
}

const SideCard: FC<FavouriteArtistProps> = ({ selections }) => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <div className="card flex-row mb-22 shadow pt-2 pb-2">
            <Image src={selections.image[0]?.img} alt="me" width="130" height="130" />
            {/* <Image className="image-responsive" src={selections.image[0]?.img} style={{width: '10rem', maxHeight: '10rem', minHeight: '10rem' }}/> */}
            <div className="card-body">
              <h4 className="card-title h5 h4-sm">{selections.name}</h4>
              <p className="card-text">{selections.marcas.join(', ')}</p>
              <div className='d-flex justify-content-end align-items-end'>
                <label><Field name={selections.fname} type='checkbox'></Field> Agregar</label>
                {/* <button className='btn btn-primary-outline' type='button' style={{ backgroundColor: 'transparent' }}><strong>Agregar</strong> <Field name={selections.fname} type='checkbox'></Field><FontAwesomeIcon style={{ color: '#black' }} icon={faPlus} /> </button> */}
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  )
}

export default SideCard