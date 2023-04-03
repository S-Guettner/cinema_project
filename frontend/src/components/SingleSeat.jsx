import { useState,useEffect } from "react"


const SingleSeat = ({number,bookedStatus,price,id}) => {

        const [seatColorState,setSeatColorState] = useState("")

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
            
            setToggle(!toggle)
            /* console.log(toggle) */
            
            
            fetch(`http://localhost:9090/api/v1/seats/update/${id}` , {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"seatBooked" : !toggle}) 
            })
            
        }
        
        console.log(toggle)
        return ( 
            <button >
                <div onClick={clickHandler} className={`${seatColorState}`}>
                    <p>{number}</p>
                    <p>{`${bookedStatus}`}</p>
                    <p>{price}€</p>
{/*                     <p>{`${seatColorState}`}</p> */}
                </div>
            </button>
     )
}
 
export default SingleSeat;