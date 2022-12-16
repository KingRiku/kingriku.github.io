import { Inter } from '@next/font/google'
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HomePage from '../components/forms/interest';
import Login from '../components/login';
import Layout from '../components/utils/layout';

const Home: NextPage = () => {
  const [signed, setSigned] = useState<boolean>(false)
  const [formned, setFormed] = useState<boolean>(false)

  useEffect(() => {
    if(localStorage.getItem('session') != undefined) {
      setSigned(true)
    } else {
      setSigned(false)
    }

  }, [])
  return (
    <Layout>
      {
          signed == false ?
            <Login></Login>
          :
          <HomePage/>
      }
    </Layout>
  )
}

export default Home;