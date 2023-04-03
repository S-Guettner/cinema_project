import { useState,useEffect } from "react"
import SingleSeat from "./SingleSeat"
import { v4 as uuidv4 } from 'uuid'


const SeatList = () => {

    const [seatData,setSeatData] = useState([])
    
    const [fetchTrigger,setFetchTrigger] = useState(true)

    console.log(fetchTrigger)

    useEffect(() => {
            console.log("HALLLLOO")
            fetch(`http://localhost:9090/api/v1/seats`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSeatData(data?.sort((a, b) => (a.seatNumber > b.seatNumber) ? 1 : -1))
            })
    }, [fetchTrigger])

/* 
console.log(seatData) */
    return ( 
        <main>
            <div className="w-60 text-center bg-orange-500 mb-12 mt-10">movie screen</div>
            <section>
                <div className=" w-60 mb-4 ml-2">
                    {seatData?.map((seat) => {
                        return(
                            <SingleSeat 
                            key={uuidv4()}
                            number={seat.seatNumber}
                            bookedStatus={seat.seatBooked}
                            price={seat.seatPrice}
                            id={seat._id}
                            trigger={setFetchTrigger}
                            />
                        )
                    })}
                </div>
                <div className="bg-blue-500 block w-60 text-center">PARKETT 12€</div>
                <div className="bg-green-500 block w-60 text-center mb-10">LOGE 16€</div>
            </section>
        </main>
     )
}
 
export default SeatList;