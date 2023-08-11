import { Box,Container,Typography,Grid } from "@mui/material";

const Contact = () => {
    return (
    <Box id='section4' sx={{
        backgroundColor:'custom.fourth',
        color:'custom.white'
    }}>
        <Container>
            <Grid container spacing={4} columns={18}>
                <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                    <Box sx={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                        <Typography variant="h4" sx={{
                            mb:4,
                            mt:8
                        }}>
                            GRADIS LIMITED
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                    <Box sx={{
                            display:'flex',
                            justifyContent:'center'
                        }}>
                            <Typography variant="h4" sx={{
                                mb:4,
                                mt:8
                            }}>
                                CONTACT
                            </Typography>
                        </Box>                
                </Grid>
                <Grid item xs={18} sm={18} md={6} lg={6} xl={6}>
                    <Box sx={{
                            display:'flex',
                            justifyContent:'center'
                        }}>
                            <Typography variant="h4" sx={{
                                mb:4,
                                mt:8
                            }}>
                                RESOURCES
                            </Typography>
                        </Box>                  
                </Grid>
            </Grid>
        </Container>
    </Box>
    )
}
export default Contact;