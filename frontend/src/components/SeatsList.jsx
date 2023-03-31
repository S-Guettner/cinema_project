import { useState } from "react"
import SingleSeat from "./SingleSeat"
import { v4 as uuidv4 } from 'uuid'


const SeatList = () => {

    let seatNumber = 24
    const [seatState,setSeatState] = useState([
        {number:1 , booked:false},
        {number:2 , booked:false},
        {number:3 , booked:false},
        {number:4 , booked:false},
        {number:5 , booked:false},
        {number:6 , booked:false},
        {number:7 , booked:false},
        {number:8 , booked:false},
        {number:9 , booked:false},
        {number:10 , booked:false},
        {number:11 , booked:false},
        {number:12 , booked:false},
        {number:13 , booked:false},
        {number:14 , booked:false},
        {number:15 , booked:false},
        {number:16 , booked:false},
        {number:17, booked:false},
        {number:18 , booked:false},
        {number:19 , booked:false},
        {number:20 , booked:false},
        {number:21 , booked:false},
        {number:22 , booked:false},
        {number:23 , booked:false},
        {number:24 , booked:false},
    ])

    return ( 
        <main>
            <h1>SEATLIST</h1>
            <section>
                <div className=" w-60">
                    {seatState.map((item) => {
                        
                        console.log(item)
                        
                        return(
                            <SingleSeat 
                            key={uuidv4()}
                            id={item.number}
                            status={item.booked}
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