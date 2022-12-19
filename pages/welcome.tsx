import { sign } from 'crypto';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import HomePage from '../components/forms/interest';
import Login from '../components/login';
import SelectionNavs from '../components/selection_groups';
import SelectionMarks from '../components/selection_marks';
import Layout from '../components/utils/layout';

const Welcome: NextPage = () => {
  const [signed, setSigned] = useState<boolean>(false)

  useEffect(() => {
    if(localStorage.getItem('grupos') !== undefined) {
      setSigned(true)
    } else {
      setSigned(false)
    }

  }, [signed])

  return (
    <Layout>
      {
          signed === false ?
            <SelectionNavs/>
          :
          <SelectionMarks/>
      }
    </Layout>
  )
}

export default Welcome;