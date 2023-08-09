
import {Container,Typography,Button,Grid,Box,Card,CardMedia,CardContent} from "@mui/material";
import { Link} from "react-scroll";

import data from "../../img/data.png";
import insights from "../../img/insights.png";
import technology from "../../img/technology.png";

// We provide no non-sense cost effective data solutions for SME’s and charities across the UK by leveraging state of the art Cloud solutions.
const Header = () => {
    return (
        <Container id='section1'>
            <Box sx={{
                justifyContent:'center',
                textAlign:'center'
            }}>
                <Typography variant="h2" sx={{ 
                    textAlign:'center',
                    color: 'custom.third',
                    mb: 2,
                    mt: 2,
                    borderBottom: `2px solid custom.third`,
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
                    Gradis is a Data Solutions Company that helps small business and charities make use of their data, with a focus on using the state of the art cloud solutions, in the most cost effective way possible. 
                </Typography>
                <Grid container columns={18} spacing={3} height="500px">
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent></CardContent>
                            <CardMedia></CardMedia>  
                        </Card>
                    </Grid>
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent></CardContent>
                            <CardMedia></CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent></CardContent>
                            <CardMedia></CardMedia>
                        </Card>
                    </Grid>
                </Grid>
                <Button variant="contained" mt={8} size="large" sx={{
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