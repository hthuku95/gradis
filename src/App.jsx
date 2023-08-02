import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Index from './Index';

const theme = createTheme({
  spacing:8,
  palette: {
    custom: {
      white:'#ffffff',
      grey:'#CAD2C5',
      first:'#84A98C',
      second:'#52796F',
      third: '#354F52',
      fourth:'#2F3E46'
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Index/>
    </ThemeProvider> 
  );
}

export default App;
