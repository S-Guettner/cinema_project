import SeatList from "../components/SeatsList";
import { Link } from 'react-router-dom'


const Home = () => {
    return ( 
        <main className="mx-auto w-60 bg-gray-400">
            <SeatList />
            <Link className="border-2 p-2 rounded-lg" to={'/dashboard'}>Link to Dashboard</Link>
        </main>
     )
}
 
export default Home;