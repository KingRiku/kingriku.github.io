import { NextPage } from "next";
import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { artist_collections } from "../data/followed_artist";
import Layout from '../components/utils/layout';
import { artist } from "../data/artist";
import Link from "next/link";

const FollowedArtist: NextPage = () => {
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
          <Col xs='12' className="d-flex justify-content-center mb-2 mt-3">
            <h6><strong>Artists</strong></h6>
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
            {
              artist_collections.map((item, index) => (
                <Slider {...settings} key={index} className='mb-5'>
                  {
                    item.images.map((item, index) =>(
                      <Card key={index}>
                        <Card.Img src={item.img} style={{ maxHeight: '20rem' }} className='img-fluid'>
                        </Card.Img>
                        <Card.Body>
                          <Card.Title className="d-flex justify-content-center">
                            Collección {item.name}
                          </Card.Title>
                          <Card.Text className="d-flex justify-content-center">
                            <Link href={`artist_closet/${item.fname}/${item.id}`}>
                              ver mas...
                            </Link>
                          </Card.Text>
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
  );
}

export default FollowedArtist;