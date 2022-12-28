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
    // for(let c of cosito) {
    //   if(cosito.filter(e => e.id === imger)){
    //     console.log(c)
    //   }
    // }
    console.log(cosito)
    for (const cos of cosito) {
      for (const im of cos.images){
        console.log(im.fname)
        console.log(im.id)
        if(im.id == imger) {
          if(im.fname === name ) {
            console.log('holi', im.img)
            setfirst(im.img)
          } else {
            console.log('pene 2')
          }
        } else {
          console.log('pene')
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
          src={first}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustomsArtist