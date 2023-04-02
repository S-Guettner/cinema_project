import { useState,useEffect } from "react"
import SingleSeat from "./SingleSeat"
import { v4 as uuidv4 } from 'uuid'


const SeatList = () => {

    const [seatData,setSeatData] = useState([])
    
    const [dataTimer,setDataTimer] = useState(true)

        const interval = setInterval(() => {
            setDataTimer(!dataTimer)
            console.log(dataTimer)
        }, 5000)
     
        //stops intervall
        clearInterval(interval)

    useEffect(() => {

            fetch(`http://localhost:9090/api/v1/seats`)
            .then(res => res.json())
            .then(data => {
                setSeatData(data?.sort((a, b) => (a.seatNumber > b.seatNumber) ? 1 : -1))
            })
    }, [/* dataTimer */])


console.log(seatData)
    return ( 
        <main>
            <h1>SEATLIST</h1>
            <div className="w-60 text-center bg-orange-500 mb-12">movie screen</div>
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