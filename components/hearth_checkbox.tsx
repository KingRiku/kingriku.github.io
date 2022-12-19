import React, { FC } from 'react'
import { Col } from 'react-bootstrap'
// import {Style} from '../styles/modules/heart_checkbos.sass'

type genresProps = {
  genres: any
}

const HearthCheckbox: FC<genresProps>= ({genres}) => {
  return (
    <Col xs='12' className='d-flex' style={{ marginTop: '-.8rem'}}>
      <input id={genres.name} type="checkbox" name={genres.name} className='d-flex justify-content-center' />
      <label htmlFor="heart">❤</label>
    </Col>
  )
}

export default HearthCheckbox

  // <Container>
  //   <div classNameName='checkboxes-container'>
  //     <div classNameName='control-group'>
  //     <input type ="checkbox" id="red-check1" classNameName="red-heart-checkbox"> </input>
  //     </div>
  //   </div>
  // </Container>

// %label{:for => "red-check1"}
// Checked