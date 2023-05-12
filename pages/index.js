import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Filters from '../components/filters'
import Link from 'next/link';
import Components from '../components/components'
import qs from 'qs';

export async function getServerSideProps(context) {
  const { query } = context;

  const baseUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
  const queryParams = {};

  Object.keys(query).forEach((key) => {
    if (query[key]) {
      queryParams[key] = query[key];
    }
  });

  const apiUrl = `${baseUrl}&${qs.stringify(queryParams)}`;
  console.log( queryParams ,apiUrl);

  const res = await fetch(apiUrl);
  const data = await res.json();

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
        <div className='flex gap-5'>
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
