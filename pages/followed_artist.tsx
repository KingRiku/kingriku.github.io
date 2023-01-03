import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { artist_collections } from "../data/followed_artist";
import Layout from '../components/utils/layout';
import { artist } from "../data/artist";
import Link from "next/link";
import { clothes } from "../data/artist_clothes";
import { arrayCollection } from "./artist_closet/[name]/[id]";


const FollowedArtist: NextPage = () => {
  const [onSearchText, setSearchText] = useState('');

  const [artist, setArtist] = useState<any[]>([])
  const [artistas, setArtistas] = useState<any[]>([])

  const script = async () => {
    const artist = await (JSON.parse(localStorage.getItem('artist') as string) ?? '')
    setArtist(artist)
  }

  useEffect(() => {
    script()
  }, [])

  useEffect(() => {
    let body = []
    for(let cos of artist) {
      for(let art of clothes){
        if(art.name == cos.name) {
          body.push(art)
        }
      }
    }
    let unique = body.filter((v, i, a) => a.indexOf(v) === i)
    setArtistas(unique)
  }, [artist])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
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
            <h5><strong>Artists</strong></h5>
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
              artistas.map((item, index) => (
                <Slider {...settings} key={index} className='mb-5'>
                  {
                    item?.arrayCollection?.map((item: arrayCollection, index: number) => (
                      <Card key={index}>
                        <Card.Img src={item.img} style={{ minHeight: '20rem', maxHeight: '20rem' }} className='img-fluid' >
                        </Card.Img>
                        <Card.Body>
                          <Card.Title className="d-flex justify-content-center">
                            <p>
                              Marca: {item.marca} <br/>
                              Modelo: {item.model}
                            </p>
                          </Card.Title>
                          <Card.Text className="d-flex justify-content-center">
                            <Link href={`artist_closet/${item.name}/${item.id}`}>
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