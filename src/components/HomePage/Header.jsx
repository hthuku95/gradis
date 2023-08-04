import {Container,Typography,Button,Grid} from "@mui/material";
import { Link} from "react-scroll";

const Header = () => {
    return (
        <Container id='section1'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <Typography variant="h2" sx={{
                        p:2,
                        color:'custom.third'
                        }}>
                        GRADIS
                    </Typography>
                    <Typography variant="body1" sx={{
                        marginLeft:4,
                        marginBottom:4,
                        color: 'custom.second'
                        }}
                        gutterBottom='true'
                        >
                        We provide no non-sense cost effective data solutions for SME’s and charities across the UK by leveraging state of the art Cloud solutions.
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
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;