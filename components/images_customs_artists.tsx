import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { clothes } from '../data/artist_clothes'

type imageProp = {
  imger: number
  name: string
}

const ImagesCustomsArtist: FC<imageProp> = ({imger, name}) => {
  let cosito = clothes
  const [first, setfirst] = useState<any>()

  useLayoutEffect(() => {
    for (const cos of clothes) {
      for (const im of cos.arrayImages){
        if(im.id == imger) {
          if(im.name === name ) {
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
          className='shadow'
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