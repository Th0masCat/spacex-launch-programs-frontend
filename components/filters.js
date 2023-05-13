import Link from 'next/link';
import { useState } from 'react';

export default function Filters() {

    const [filter, setFilter] = useState({
        launch_success: null,
        land_success: null,
        launch_year: null
    })

    return (
        <div className='p-5 w-full mobile:w-fit bg-white rounded-lg h-fit'>
            <h1 className='font-bold'>Filters</h1>
            <div className="flex flex-col">
                <h2 className='text-center font-light mt-2'>Launch Year</h2>
                <div className='grid grid-cols-2 gap-2 mt-2 justify-center items-center'>
                    {
                        [2006, 2007, 2008, 2009, 2010, 2011, 2012,
                            2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020].map((year, index) => {
                                return (
                                    <Link
                                        onClick={() => setFilter({ ...filter, launch_year: year })}
                                        className="flex rounded bg-lime-400 justify-center"
                                        key={index}
                                        href={{
                                            pathname: '/',
                                            query: { ...filter, launch_year: year },
                                        }}
                                    >
                                        {year}
                                    </Link>
                                )
                            }
                            )
                    }
                </div>
                <h3 className='text-center font-light mt-2'>Successful Launch</h3>
                <div className='flex justify-center gap-2'>
                    <Link
                        onClick={() => setFilter(
                            { ...filter, launch_success: true })}
                        className="flex rounded bg-lime-400 justify-center px-2"
                        href={{
                            pathname: '/',
                            query: { launch_success: true, landing_success: filter.land_success, launch_year: filter.launch_year },
                        }}
                    >
                        True
                    </Link>

                    <Link
                        onClick={() => setFilter(
                            { ...filter, launch_success: false })}
                        className="flex rounded bg-lime-400 justify-center px-2"
                        href={{
                            pathname: '/',
                            query: { launch_success: false, landing_success: filter.land_success, launch_year: filter.launch_year },
                        }}
                    >
                        False
                    </Link>

                </div>

                <h3 className='text-center font-light mt-2'>Successful Landing</h3>
                <div className='flex justify-center gap-2'>
                    <Link
                        onClick={() => setFilter(
                            { ...filter, land_success: true })}
                        className="flex rounded bg-lime-400 justify-center px-2"
                        href={{
                            pathname: '/',
                            query: { launch_success: filter.launch_success, landing_success: true, launch_year: filter.launch_year },
                        }}
                    >
                        True
                    </Link>

                    <Link
                        onClick={() => setFilter(
                            { ...filter, land_success: false })}
                        className="flex rounded bg-lime-400 justify-center px-2"
                        href={{
                            pathname: '/',
                            query: { launch_success: filter.launch_success, landing_success: false, launch_year: filter.launch_year },
                        }}
                    >
                        False
                    </Link>

                </div>

            </div>

            <h3 className='text-center  text-red-700 font-light mt-2'>Clear Filters</h3>
            <div className='flex justify-center gap-2'>
                <Link
                    onClick={() => setFilter(
                        {
                            launch_success: null,
                            land_success: null,
                            launch_year: null
                        })}
                    className="flex rounded bg-red-400 justify-center px-2"
                    href={{
                        pathname: '/',
                        query: {},
                    }}
                >
                    Clear
                </Link>


            </div>


        </div>

    )
}