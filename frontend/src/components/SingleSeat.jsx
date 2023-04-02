import { useState,useEffect } from "react"


const SingleSeat = ({number,bookedStatus,price,id}) => {

        const color = number > 12 ? "yellow" : "blue"
        const seatColor = bookedStatus === false ? color : "red"
        

        const [toggle,setToggle] = useState(false)

        /* change body: JSON.stringify({"seatBooked" : true}) now WORKING!!!!! */
        const clickHandler = () => {
            
            setToggle(!toggle)
            console.log(toggle)
            
            
            fetch(`https://cinema-booking-system.vercel.app/api/v1/seats/update/${id}` , {
                method: "PUT",
                 headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({"seatBooked" : toggle}) 
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