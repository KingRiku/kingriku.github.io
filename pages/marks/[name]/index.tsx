import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import Layout from "../../../components/utils/layout";
import { clothes } from "../../../data/artist_clothes";
import { collections } from "../../../data/collections";
// import Layout from "../components/utils/layout";
// import { collections } from '../data/collections'

const MarksList = () => {
  const router = useRouter()
  const name = router.query.name as string
  const [onSearchText, setSearchText] = useState('');
  const [collect , setCollect] = useState<any[]>([])

  // useEffect(() => {
  //   if (onSearchText !== '') {
  //     const filteredObject = collections.filter((item) => {
  //       return item.name.toLowerCase().includes(onSearchText.toLowerCase());
  //     });
  //     setData([...filteredObject]);
  //   } else {
  //     setData([...entities]);
  //   }
  // }, [onSearchText]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const onFilterChange = (e: any) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    let body = []
    for (const col of collections){
      if(col.name === name){
        body.push(col)
      }
    }
    setCollect(body)
  }, [name])
  
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs='12' className="d-flex justify-content-center mt-3 mb-2">
            <h6><strong>{name}</strong></h6>
          </Col>
          {/* <Col xs='12' className="mb-3">
            <input
              type="text"
              className="form-control"
              id="default-04"
              onChange={onFilterChange}
              placeholder="Quick search by name"
            />
          </Col> */}
        </Row>
        <Row>
          <Col xs='12'>
              {
                collect.map((item, index) =>(
                  <Slider {...settings} key={index} className='mb-5'>
                    {
                      item.image.map(( item: any, index: number ) => (
                        <Card key={index}>
                          <Card.Img src={item.image}>
                          </Card.Img>
                          <Card.Body>
                            <Card.Title className="d-flex justify-content-center">
                              {item.desc}
                            </Card.Title>
                            <Card.Title className="d-flex justify-content-center">
                              {item.year}
                            </Card.Title>
                            {/* <Card.Text className="d-flex justify-content-center">
                              <a href="">ver mas...</a>
                            </Card.Text> */}
                          </Card.Body>
                        </Card>
                      ))
                    }
                  </Slider>
                ))
              }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default MarksList