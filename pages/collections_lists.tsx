import React, { Fragment, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import Layout from "../components/utils/layout";
import { collections } from '../data/collections'

const Collections = () => {
  const [onSearchText, setSearchText] = useState('');

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
    autoplaySpeed: 2000,
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
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs='12'>
            <h6>Marca</h6>
          </Col>
          <Col xs='12' className="mb-3">
            <input
              type="text"
              className="form-control"
              id="default-04"
              onChange={onFilterChange}
              placeholder="Quick search by name"
            />
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Slider {...settings}>
              {
                collections.map((item, index) =>(
                  <Card key={index}>
                    <Card.Img src={item.image}>
                    </Card.Img>
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-center">
                        Collección {item.name}
                      </Card.Title>
                      <Card.Title className="d-flex justify-content-center">
                        {item.year}
                      </Card.Title>
                      <Card.Text className="d-flex justify-content-center">
                        <a href="">ver mas...</a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }
            </Slider>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Collections;