import { createTheme } from '@mui/material/styles';

const crystalBreezeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#039be5', // Sky Blue
    },
    secondary: {
      main: '#64b5f6', // Light Blue
    },
    background: {
      default: '#f5f5f5', // Light Gray
      paper: '#ffffff', // White
    },
    text: {
      primary: '#212121', // Dark Gray
      secondary: '#757575', // Medium Gray
    },
  },
});

export default crystalBreezeTheme;
