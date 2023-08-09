
import {Container,Typography,Button,Grid,Box,Card,CardMedia,CardContent} from "@mui/material";
import { Link} from "react-scroll";

import data from "../../img/data.png";
import insights from "../../img/insights.png";
import technology from "../../img/technology.png";

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
                <Typography variant="body1" sx={{
                    color: 'custom.second',
                    textAlign: 'center',
                    width: '75%',
                    margin: '0 auto',
                    mb: 4 
                }}>
                    We provide no non-sense cost effective data solutions for SME’s and charities across the UK by leveraging state of the art Cloud solutions. 
                </Typography>
                <Grid container columns={18} spacing={3} height="auto" sx={{
                    mb:4
                }}>
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent>
                                <Box sx={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}>
                                    <Typography variant="h4" sx={{
                                        color:'custom.third'
                                    }}>
                                        Data
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardMedia
                                sx={{
                                    height:300
                                }}
                                image={data}
                            ></CardMedia>  
                        </Card>
                    </Grid>
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent>
                                <Box sx={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}>
                                    <Typography variant="h4" sx={{
                                        color: 'custom.third'
                                    }}>
                                        Insights
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardMedia
                                sx={{
                                    height:300
                                }}
                                image={insights}
                            ></CardMedia>
                        </Card>
                    </Grid>
                    <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                        <Card>
                            <CardContent>
                                <Box sx={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}>
                                    <Typography variant="h4" sx={{
                                        color:'custom.third'
                                    }}>
                                        Technology
                                    </Typography>
                                </Box>
                            </CardContent>
                            <CardMedia
                                sx={{
                                    height:300
                                }}
                                image={technology}
                            ></CardMedia>
                        </Card>
                    </Grid>
                </Grid>
                <Button variant="contained" size="large" sx={{
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