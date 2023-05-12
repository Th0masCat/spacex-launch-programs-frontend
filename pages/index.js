import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Filters from '../components/filters'
import Components from '../components/components'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/launches?limit=10')
      .then(res => {
        console.log(res.data)
        setData(res.data)
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
          {
            data.map((item, index) => {
              return (
                <Components key={index} name={item.mission_name} num={item.flight_number} img={item.links.mission_patch} mission_id = {item.mission_id} launchYear={item.launch_year} launchSuccess={item.launch_success} landingSuccess={item.rocket.first_stage.cores[0].land_success} />
              )
            }
            )}
        </div>


      </section>
    </div>
  )
}
