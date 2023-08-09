import { Box,Container,Typography,Grid,Button } from "@mui/material";

const Services = () => {
    return (
        <Container id='section3'>
            <Box sx={{
                justifyContent:'center',
                textAlign:'center',
                mb:6
            }}>
                <Typography variant="h2" sx={{ 
                    textAlign:'center',
                    color: 'custom.third',
                    mb: 2,
                    mt: 2,
                    borderBottom: `2px solid custom.third`,
                }}>
                    Services
                </Typography>
                <Typography variant="body1" sx={{
                    color: 'custom.second',
                    textAlign: 'center',
                    width: '75%',
                    margin: '0 auto',
                    mb: 4 
                }}>
                    As a passionate team of experienced data scientists, analysts, and engineers, we strive to turn your data into clear decisive actionable insights, patnering to supporting your organisational goals, missions and objectives. 
                </Typography>
                <Box sx={{
                    mb:6
                }}>
                    <Grid container spacing={3} columns={16}>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                Data Platforms Solutions
                            </Button>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                API Development
                            </Button>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                Power BI
                            </Button>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                Data Science
                            </Button>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                Data Migrations
                            </Button>
                        </Grid>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:1,
                                backgroundColor: 'custom.third',
                                '&:hover': {
                                    backgroundColor: 'custom.third',
                                },
                                fontSize: '30px',
                                textTransform: 'none'
                            }}>
                                Robotic Process Automation
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    display:'flex',
                    justifyContent:'center',
                    mb:6
                }}>
                    <Typography variant='body1' sx={{
                        color:'custom.third'
                    }}>
                        Gradis is a customer-centric organisation commited to providing a first-class customer experience. We provide our services on taking time to listen to and understand our clients from the very begining. 
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Services;