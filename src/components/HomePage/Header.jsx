import { Box, Container,Typography,Button} from "@mui/material";
import { Link} from "react-scroll";

const Header = () => {
    return (
        <Container id='section1' sx = {{
            mb: 12
        }}>
            <Box sx={{ 
                justifyContent: 'center',
                textAlign:'center', 
            }}>
                <Typography variant="h1" sx={{ 
                        textAlign:'center',
                        color: 'custom.third',
                        pt: 12,
                        pb: 0
                    }}>
                    GRADIS
                </Typography>
                <Typography variant="h5" sx={{
                    color: 'custom.second',
                    textAlign: 'center',
                    width: '60%',
                    margin: '0 auto',
                    mb: 4 
                }}>
                    We provide no non-sense cost effective data solutions for SME’s and charities. 
                </Typography>
                <Button variant="contained" mt={2} size="large" sx={{
                    color: 'custom.white',
                    width: '300px',
                    p:1,
                    backgroundColor: 'custom.third',
                    '&:hover': {
                        backgroundColor: 'custom.third',
                    },
                    fontSize: '30px'
                }}>
                    <Link
                        key={3}
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}> 
                        Get Started
                    </Link>
                </Button>
            </Box>
        </Container>
    )
}

export default Header;