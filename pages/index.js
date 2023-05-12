import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Filters from '../components/filters'
import Components from '../components/components'

export async function getServerSideProps(context) {
  // Get query parameters from context object
  const { query } = context;

  // Build API URL with query parameters
  const apiUrl = `https://api.spacexdata.com/v3/launches?limit=10&launch_success=${query.launch_success}`;

  // Fetch data from external API
  const res = await fetch(apiUrl);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}


export default function Home({ data }) {
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
                  <Components
                    key={index}
                    name={item.mission_name}
                    num={item.flight_number}
                    img={item.links.mission_patch}
                    mission_id={item.mission_id}
                    launchYear={item.launch_year}
                    launchSuccess={item.launch_success}
                    landingSuccess={item.rocket.first_stage.cores[0].land_success} />
                )
              }
              )}
          </div>
        </section>
      </div>
  )
}
