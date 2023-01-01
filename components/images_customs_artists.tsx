import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Col, Container, Figure, Image, Row } from 'react-bootstrap'
import { artist_collections } from '../data/followed_artist'

import { genresData, MarkTypes } from './event_cards'

type imageProp = {
  imger: number
  name: string
}

type ArtistCollection = {
  images: [{
    id: number;
    imger: string;
    name: string;
    fname: string;
  }][];
}[]

type ArtistCollectionDos = {
  id: number;
  imger: string;
  name: string;
  fname: string;
}

const ImagesCustomsArtist: FC<imageProp> = ({imger, name}) => {
  let cosito = artist_collections
  const [first, setfirst] = useState<any>()

  useLayoutEffect(() => {
    for (const cos of cosito) {
      for (const im of cos.images){
        if(im.id == imger) {
          if(im.fname === name ) {
            setfirst(im.img)
          } else {
          }
        } else {
        }
      }
    }
  }, [])
  return (
    <Fragment>
      <Figure>
        <Figure.Image 
          width={'100%'}
          height={'100%'}
          alt='171x180'
          style={{maxHeight: '8rem'}}
          src={first}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustomsArtist