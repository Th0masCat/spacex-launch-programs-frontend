import Head from 'next/head'
import Filters from '../components/filters'
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

  const resa = await fetch(apiUrl);
  const data = await resa.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>SpaceX Launch Programs</title>
        <meta
          name="description"
          content="SpaceX Launch Programs and whether they were successful or not."></meta>
      </Head>
      <section>
        <h1 className='text-3xl font-bold p-4'>SpaceX Launch</h1>
        <div className='flex flex-col justify-center items-center p-5 gap-5 mobile:flex-row mobile:justify-start mobile:items-start'>
          <Filters />
          <div className='grid p-0 mobile:px-10 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-5 flex-auto'>
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
                    launchSuccess={String(item.launch_success)}
                    landingSuccess={String(item.rocket.first_stage.cores[0].land_success)} />
                )
              }
              )}
          </div>
        </div>
      </section>
    </div>
  )
}
