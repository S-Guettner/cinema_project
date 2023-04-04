import { useState,useEffect } from "react"


const SingleSeat = ({number,bookedStatus,price,id,trigger}) => {

        const [seatColorState,setSeatColorState] = useState("")
        /* const [triggerState,setTriggerState] = useState(trigger) */

        useEffect(() => {
            if(number > 12 && bookedStatus === false){
                setSeatColorState('w-10 h-10 text-center rounded-full bg-green-500 inline-block')
            }
            else if(number <= 12 && bookedStatus === false){
                setSeatColorState("w-10 h-10 text-center rounded-full bg-blue-500 inline-block")
            }else{
                setSeatColorState(`w-10 h-10 text-center rounded-full bg-red-500 inline-block`)
            }

        },[])


        
/*         const color = number > 12 ? "green" : "blue"
        const seatColor = bookedStatus === false ? color : "red" */
        
        /* console.log(seatColor) */

        const [toggle,setToggle] = useState(bookedStatus)

        /* change body: JSON.stringify({"seatBooked" : true}) now WORKING!!!!! */
        const clickHandler = () => {
            
            
            /* console.log(toggle) */
            
/*             console.log(trigger) */
            
            fetch(`https://cinema-booking-system.vercel.app/api/v1/seats/update/${id}` , {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"seatBooked" : !bookedStatus}) 
            }).then(() => {
                setToggle(!toggle)
                trigger(prev => !prev)
            }).then(() => {
                
                console.log(`${toggle}`)
                fetch(`https://cinema-booking-system.vercel.app/api/v1/send_mail` , {
                    method: "PUT",
                    headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({message: `${price}`})
                })
            })
            
        }
        
        /* console.log(toggle) */
        return ( 
            <button className="m-[.5rem]">
                <div onClick={clickHandler} className={`${seatColorState}`}>
                    {/* <p className="pt-2">{number}</p> */}
                    {/* <p>{`${bookedStatus}`}</p> */}
                    {/* <p>{price}€</p> */}
                    {/* <p>{`${seatColorState}`}</p> */}
                </div>
            </button>
     )
}
 
export default SingleSeat;