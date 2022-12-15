import { Col, Container, Row } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NewComponent from '../../components/checktester';
import { Marcas } from '../../data/marcas';
import { MusicaStiles } from '../../data/musical_style';

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Musicales"  className=''>
        <Container>
          <Row>
            {
              MusicaStiles.map((item, index) => (
                <Col xs='6' lg='3' key={index}>
                  <NewComponent checkerbox={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="profile" title="Marcas">
        <Container>
          <Row>
            {
              Marcas.map((item, index) => (
                <Col xs='6' lg='3' key={index}>
                  <NewComponent checkerbox={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );
}

export default FillExample;