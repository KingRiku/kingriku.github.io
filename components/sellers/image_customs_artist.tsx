import React, { FC, Fragment, useLayoutEffect, useState } from 'react'
import { Figure } from 'react-bootstrap'
import { genres } from '../../data/genres'
import { genresData } from '../event_cards_sellers'

type imageProp = {
  img: number
}

const ImagesCustomsSellers: FC<imageProp> = ({img}) => {
  let cosito: genresData[]  = genres
  const [first, setfirst] = useState<any>()

  useLayoutEffect(() => {
    // for(let c of cosito) {
    //   if(cosito.filter(e => e.id === img)){
    //     console.log(c)
    //   }
    // }
    let cosi = cosito.filter(e => e.id === img)
    setfirst(cosi);
    // if(cosito.filter(e => e.id === img)) {
    //   console.log(cosito);
    // }
    
  }, [])

  return (
    <Fragment>
      <Figure>
        <Figure.Image 
          width={'100%'}
          height={'100%'}
          alt='171x180'
          src={first?.[0].image}
        />
      </Figure>
    </Fragment>
  )
}

export default ImagesCustomsSellers