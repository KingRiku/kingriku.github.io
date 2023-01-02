import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { clothes } from '../../data/artist_clothes'
import { genres } from '../../data/genres'
import { genresData } from '../event_cards_sellers'

type imageProp = {
  img: number,
  name: string
}

const ImagesCustomsSellers: FC<imageProp> = ({img, name}) => {
  let cosito = clothes
  const [first, setfirst] = useState<any>()

  useLayoutEffect(() => {
    for (const cos of clothes) {
      if(cos.fname === 'Sellers'){
        for (const im of cos.arrayImages){
          if(im.id == img) {
            if(im.name === name ) {
              setfirst(im.img)
            } else {
            }
          } else {
          }
        }
      }
    }
  }, [])
  return (
    <Fragment>
      <Figure>
        <Figure.Image 
          width={'100%'}
          className='shadow'
          height={'100%'}
          alt='171x180'
          src={first}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustomsSellers