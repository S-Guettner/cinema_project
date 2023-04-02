import { useState,useEffect } from "react"
import SingleSeat from "./SingleSeat"
import { v4 as uuidv4 } from 'uuid'


const SeatList = () => {

    const [seatData,setSeatData] = useState([])


    useEffect(() => {
        const interval = setInterval(() => {
            fetch(`https://cinema-booking-system.vercel.app/api/v1/seats`)
            .then(res => res.json())
            .then(data => {
                setSeatData(data?.sort((a, b) => (a.seatNumber > b.seatNumber) ? 1 : -1))
            })

        }, 5000)
    return () => clearInterval(interval);
    }, []);


console.log(seatData)
    return ( 
        <main>
            <h1>SEATLIST</h1>
            <section>
                <div className=" w-60">
                    {seatData?.map((seat) => {
                        return(
                            <SingleSeat 
                            key={uuidv4()}
                            number={seat.seatNumber}
                            bookedStatus={seat.seatBooked}
                            price={seat.seatPrice}
                            id={seat._id}
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