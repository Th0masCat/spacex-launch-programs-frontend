import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Filters from '../components/filters'
import Components from '../components/components'
import { useEffect } from 'react'
import axios from 'axios'



export default function Home() {
  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=100')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1 className='text-3xl font-bold'>SpaceX Launch</h1>
        <div className='flex'>
          <Filters />
          <Components name='haha' launchYear="2191" launchSuccess="haha" landingSuccess='haha'/>
        </div>
       

      </section>
    </div>
  )
}
