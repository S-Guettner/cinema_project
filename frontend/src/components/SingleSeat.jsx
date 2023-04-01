import { useState } from "react"


const SingleSeat = ({seatNumber,seatStatus,seatPrice}) => {

    //setting colors for seats
    const color = seatNumber > 12 ? "green" : "yellow"
    const seatColor = seatStatus === false ? color : "red"

    return ( 
        <div className={` w-10 h-10 text-center rounded-full bg-[${seatColor}] inline-block`}>
            <p>{seatNumber}</p>
            <p>{seatStatus.toString()}</p>
            <p>{seatPrice}€</p>
        </div>
     )
}
 
export default SingleSeat;