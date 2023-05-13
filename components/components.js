import Image from 'next/image'

export default function Components(props) {
    return (
        <div className="flex flex-col justify-center rounded-lg bg-white p-5">
            <Image priority={true} className='self-center m-10' src={props.img} height={144} width={144} alt={props.name} />
            <div className='p-5'>
                <h1 className="font-bold text-violet-800">{props.name} #{props.num}</h1>
                <h2 className="font-bold">Mission Ids:</h2>
                <ul className="list-disc">
                {
                    props.mission_id.length === 0 ? <li>None</li> :
                        props.mission_id.map((id, index) => {
                            return (
                                <li key={index}>{id}</li>
                            )
                        })
                }
                </ul>
                <h2 className="font-bold">Launch Year:
                    <span className="text-violet-800 font-light"> {props.launchYear}</span>
                </h2>
                <h2 className="font-bold">Successful Launch:
                    <span className="text-violet-800 font-light"> {props.launchSuccess}</span>
                </h2>
                <h2 className="font-bold">Successful Landing:
                    <span className="text-violet-800 font-light"> {props.landingSuccess}</span>
                </h2>
            </div>
        </div>
    )
}