import { useState,useEffect } from "react"


const SingleSeat = ({number,bookedStatus,price,id}) => {

        const color = number > 12 ? "yellow" : "blue"
        const seatColor = bookedStatus === false ? color : "red"

        const clickHandler = () => {
            fetch(`https://cinema-booking-system.vercel.app//api/v1/seats/update/${id}` , {
                method: "PUT",
                header:'Access-Control-Allow-Methods: GET, PUT',
                body: true
            })

        }


        return ( 
            <button >
                <div onClick={clickHandler} className={`w-10 h-10 text-center rounded-full bg-[${seatColor}] inline-block`}>
                    <p>{number}</p>
                    <p>{bookedStatus.toString()}</p>
                    <p>{price}€</p>
                    <p>{`${seatColor}`}</p>
                </div>
            </button>
     )
}
 
export default SingleSeat;