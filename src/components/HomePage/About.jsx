import { Box,Container,Typography,Grid,Button } from "@mui/material";
import HeaderSvg from '../../svg/header.svg';

const styles = {
    svg: {
      width: '100%',
      height: '100%',
    },
  };

const About = ()=> {
    return (
        <Container id='section2'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <Box sx={{
                        mt:12
                    }}>
                        <Typography variant="h2" sx={{
                            color:'custom.third'
                            }} gutterBottom={true}>
                            About Us
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'custom.second',
                            mb: 6
                            }}
                            >
                            Gradis is a Data Solutions Company that helps small business and charities make use of their data, with a focus on using the state of the art cloud solutions, in the most cost effective way possible. 
                            
                        </Typography>
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
                                Read More
                        </Button>
                    </Box>
                </Grid>
            
                <Grid item xs={16} sm={16} md={8} lg={8} xl={8} height="100vh">
                    <img src={HeaderSvg} alt="About Image in SVG format" style={styles.svg}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;