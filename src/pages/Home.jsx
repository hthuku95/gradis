import { Box } from "@mui/material";
import HomeNav from '../components/HomePage/HomeNav';
import Contact from '../components/Contact';
import Header from '../components/HomePage/Header';
import About from '../components/HomePage/About';
import Services from '../components/HomePage/Services';

const Home = () => {
    return (
        <Box>
            <HomeNav/>
            <Header/>
            <About/>
            <Services/>
            <Contact/>
        </Box>
    )
}

export default Home;