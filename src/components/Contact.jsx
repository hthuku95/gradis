import { Box,Container,Typography } from "@mui/material";

const Contact = () => {
    return (
    <Box id='section4' sx={{
        backgroundColor:'custom.fourth',
        color:'custom.white'
    }}>
        <Container>
            <Box sx={{
                display:'flex',
                justifyContent:'center'
            }}>
                <Typography variant="h3" sx={{
                    mb:4,
                    mt:8
                }}>
                    GRADIS LIMITED
                </Typography>
            </Box>
        </Container>
    </Box>
    )
}
export default Contact;