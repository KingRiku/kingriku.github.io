import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Col, Container, Figure, Image, Row } from 'react-bootstrap'
import { genres } from '../data/genres'
import { genresData, MarkTypes } from './event_cards'

type imageProp = {
  img: number
}

const ImagesCustoms: FC<imageProp> = ({img}) => {
  let cosito: genresData[]  = genres
  const [first, setfirst] = useState<any>()

  useLayoutEffect(() => {
    let cosi = cosito.filter(e => e.id === img)
    setfirst(cosi);
  }, [])

  return (
    <Fragment>
      <Figure >
        <Figure.Image
          className='shadow' 
          width={'100%'}
          height={'100%'}
          alt='171x180'
          src={first?.[0].image}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustoms