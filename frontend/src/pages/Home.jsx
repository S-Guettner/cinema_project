import SeatList from "../components/SeatsList";
import { Link } from 'react-router-dom'


const Home = () => {
    return ( 
        <main>
            <Link to={'/dashboard'}>Link to Dashboard</Link>
            <h1>HOME</h1>
            <SeatList />
        </main>
     )
}
 
export default Home;