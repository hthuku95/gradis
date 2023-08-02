import { Box,Container,Typography } from "@mui/material";

const About = ()=> {
    return (
    <Container id='section2' sx={{
        pt: 8,
        mb: 12
    }}>
        <Box sx={{ 
                justifyContent: 'center',
                textAlign:'center' 
            }}>
            <Typography variant="h2" sx={{ 
                textAlign:'center',
                color: 'custom.third',
                mb: 2,
                mt: 2,
                borderBottom: `2px solid custom.third`,
            }}>
                About Us
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
        </Box>
    </Container>
    )
}

export default About;