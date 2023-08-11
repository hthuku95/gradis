import  { useState} from 'react';
import {Toolbar,Typography,Button,ListItemText,ListItem,ListItemButton,List,IconButton,Drawer,Divider,Box,AppBar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link} from "react-scroll";


const drawerWidth = 240;

const navItems = [
  <Link
    key={0}
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Home     
  </Link>,
  <Link
    key={1}
    activeClass="active"
    to="section2"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    About 
  </Link>,
    <Link
    key={2}
    activeClass="active"
    to="section3"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Services
  </Link>,
  <Link
    key={3}
    activeClass="active"
    to="section4"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}> 
    Contact Us 
  </Link>
]

const HomeNav = (props) => {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ my: 2, p: 2 }}>
        GRADIS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item)=>(
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText>
                  {item}
                </ListItemText>
              </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{
            backgroundColor:"custom.fourth",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ p: 2, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            GRADIS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'custom.white' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box sx={{
            backgroundColor:'custom.third',
            color:'custom.white',
            height:'100vh'
            }}>
           {drawer}
          </Box>
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default HomeNav;