import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/utils/layout';
import { NextPage } from 'next';
import { useState } from 'react';
import Login from '../components/login';
import HomePage from './layout';

const Home: NextPage = () => {
  const [signed, setSigned] = useState<boolean>(false)

  useEffect(() => {
    if(localStorage.getItem('session') != undefined) {
      setSigned(true)
    } else {
      setSigned(false)
    }

  }, [])
  
  console.log(signed)
  return (
   <div>
      <Layout>
        {
          signed == false ?
            <Login></Login>
          :
          <HomePage />
        }
      </Layout>
    </div>
  )
}

export default Home