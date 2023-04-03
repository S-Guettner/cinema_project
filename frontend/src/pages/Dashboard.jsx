import { useEffect, useState} from "react"
import { Link } from "react-router-dom"



const Dashboard = () => {
    
    const [bookedSeats,setBookedSeats] = useState([])
    const [soldSeats,setSoldSeats] = useState(0)
    const [revenue,setRevenue] = useState(0)
    const [reset,setReset] = useState(false)

    console.log(revenue)

    useEffect(() => {
        fetch(`https://cinema-booking-system.vercel.app/api/v1/booked-seats`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSoldSeats(data.length)
            setBookedSeats(data)

            let sum = 0

            data?.map((item) => {
                /* console.log(item.seatPrice) */
                sum += item.seatPrice
                console.log(sum)
                setRevenue(sum)
            })

        })
    },[reset])

    const clickHandlerReset = () => {
        

        fetch('https://cinema-booking-system.vercel.app/api/v1/seats/reset_all' , {
            method: "PUT",
                 headers: {
                'Content-Type': 'application/json',
                }
            })
            .then( () => {
                setReset(!reset)
                setRevenue(0)
            })

    }
/* console.log(revenue)
console.log(reset) */

    return ( 
        <main>
            <p>{revenue}€ earned</p>
            <p>{soldSeats} of 24 seats booked</p>
            <button className="block mb-4 border-2 p-2" onClick={clickHandlerReset}>RESET</button>
            <Link className="border-2 p-2" to={'/'}>LINK TO HOME</Link>
        </main>
     );
}
 
export default Dashboard;