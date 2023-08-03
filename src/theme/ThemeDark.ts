import { createTheme } from '@mui/material/styles';

const midnightShadowsTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#1a237e', // Midnight Blue
    },
    secondary: {
      main: '#3949ab', // Dark Blue
    },
    background: {
      default: '#121212', // Dark Gray
      paper: '#212121', // Lighter Dark Gray
    },
    text: {
      primary: '#ffffff', // White
      secondary: '#e8eaf6', // Light Gray
    },
  },
});

export default midnightShadowsTheme;
