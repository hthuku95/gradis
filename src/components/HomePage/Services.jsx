import { Box,Container,Typography,Grid,Button } from "@mui/material";
import AzureSVG from '../../svg/azure.svg';
import DatabricksSVG from '../../svg/databricks.svg';
import ExcelSVG from '../../svg/excel.svg';
import PowerBISVG from '../../svg/powerbi.svg';

const styles = {
    svg: {
      width: '50%',
      height: '50%',
    },
  };

const Services = () => {
    return (
        <Box id='section3'>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                textAlign:'center',
                backgroundColor:'custom.second',
                color:'custom.white',
                mb:4,
                pt:4,
                pb:4
            }}>
                <Container>
                    <Typography variant='body1' sx={{
                        color:'custom.white'
                    }}>
                        Gradis is a customer-centric organisation commited to providing a first-class customer experience. We provide our services on taking time to listen to and understand our clients from the very begining. 
                    </Typography>
                </Container>
            </Box>
            <Box sx={{
                justifyContent:'center',
                textAlign:'center',
                mb:6
            }}>
                <Typography variant="h2" sx={{ 
                    textAlign:'center',
                    color: 'custom.third',
                    mb: 4,
                    mt: 2,
                    borderBottom: `2px solid custom.third`,
                }}>
                    Services
                </Typography>
            </Box>
            <Box sx={{
                mb:6
            }}>
            <Container>
                <Box sx={{
                    mb:6
                }}>
                    <Grid container spacing={3} columns={16}>
                        <Grid item xs={16} sm={16} md={8} lg={8} xl={8}>
                            <Button variant="contained" size="large" sx={{
                                color: 'custom.white',
                                width: '100%',
                                p:2,
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
                                p:2,
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
                                p:2,
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
                                p:2,
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
                                p:2,
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
                                p:2,
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
            </Container>
            </Box>
            <Box sx={{
                pt:4,
                pb:4,
                mt:8,
                backgroundColor:'custom.white'
            }}>
                <Container sx={{
                    pt:2,
                    pb:2
                }}>
                    <Grid container spacing={3} columns={15}>
                        <Grid item xs={15} sm={15} md={5} lg={3} xl={3}>
                            <Box sx={{
                                pt:4,
                                pb:4,
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={AzureSVG} alt="AzureSVG" style={styles.svg}/>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={15} md={5} lg={3} xl={3}>
                            <Box sx={{
                                pt:4,
                                pb:4,
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={PowerBISVG} alt="PowerBISVG" style={styles.svg}/>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={15} md={5} lg={3} xl={3}>
                            <Box sx={{
                                pt:4,
                                pb:4,
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={DatabricksSVG} alt="DatabricsSVG" style={styles.svg}/>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={15} md={5} lg={3} xl={3}>
                            <Box sx={{
                                pt:4,
                                pb:4,
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={ExcelSVG} alt="ExcelSVG" style={styles.svg}/>
                            </Box>
                        </Grid>
                        <Grid item xs={15} sm={15} md={5} lg={3} xl={3}>
                            <Box sx={{
                                pt:4,
                                pb:4,
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <img src={ExcelSVG} alt="ExcelSVG" style={styles.svg}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Services;