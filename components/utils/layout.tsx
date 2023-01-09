import { FC, PropsWithChildren} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LayoutStyles from '../../styles/modules/Layout.module.sass'
import classNames from 'classnames'
import Head from 'next/head'
import Header from '../shared/header'

export type LayoutProps = {
  pageTitle?: string
} 

const Layout: FC<PropsWithChildren<LayoutProps>> = ({children}) => {
  return (
    <div className={classNames(LayoutStyles.pageContainer)} style={{ backgroundColor: '#F2F2F2' }}>
      <Head>
        <title>Tesis-App</title>
        <meta name="description" content='cosito' />
      </Head>
      <Header />
      <div>
        <Container fluid>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
