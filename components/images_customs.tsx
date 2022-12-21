import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Col, Container, Figure, Image, Row } from 'react-bootstrap'
import { genres } from '../data/genres'
import { genresData, MarkTypes } from './event_cards'

type imageProp = {
  img: MarkTypes
}

const ImagesCustoms: FC<imageProp> = ({img}) => {
  let cosito: genresData[]  = genres
  const [first, setfirst] = useState<genresData>()

  useLayoutEffect(() => {
    for(let c of cosito) {
      if(cosito.filter(e => e.id === img.id)){
        console.log('yo soy', cosito)
        setfirst(c)
      }
    }
  }, [first])

  return (
    <Fragment>
      <Figure>
        <Figure.Image 
          width={'100%'}
          height={'100%'}
          alt='171x180'
          src={first?.image}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustoms