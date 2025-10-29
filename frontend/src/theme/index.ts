import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = {
  dark: '#3700B3',
  main: '#6200EE',
  light: '#BB86FC',
  contrastText: '#FFFFFF',
};

const ERROR_COLOR = {
  main: '#B00020',
};
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR.main,
      dark: PRIMARY_COLOR.dark,
      light: PRIMARY_COLOR.light,
      contrastText: PRIMARY_COLOR.contrastText,
    },
    error: {
      main: ERROR_COLOR.main,
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR.main,
      dark: PRIMARY_COLOR.dark,
      light: PRIMARY_COLOR.light,
      contrastText: PRIMARY_COLOR.contrastText,
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BBBBBB',
    },
    error: {
      main: ERROR_COLOR.main,
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});
