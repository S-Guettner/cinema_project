import props from 'react'

const SingleSeat = (props) => {

    console.log(props.status,props.id)

    return ( 
        <div className=" w-10 h-10 text-center rounded-full bg-slate-500 inline-block">
            <p>{props.id}</p>
            <p>{props.status}</p>
        </div>
     );
}
 
export default SingleSeat;