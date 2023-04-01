import { useState,useEffect } from "react"
import SingleSeat from "./SingleSeat"
import { v4 as uuidv4 } from 'uuid'


const SeatList = () => {

    const [seatData,setSeatData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9090/api/v1/getSeats`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSeatData(data)
        })

    },[])

    return ( 
        <main>
            <h1>SEATLIST</h1>
            <section>
                <div className=" w-60">
                    {seatData?.map((seat) => {
                        return(
                            <SingleSeat 
                            key={uuidv4()}
                            seatNumber={seat.seatNumber}
                            seatStatus={seat.seatStatus}
                            seatPrice={seat.seatPrice}
                            />
                        )
                    })}
                </div>
                <div></div>
            </section>
        </main>
     )
}
 
export default SeatList;