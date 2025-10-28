import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    neutral: {
      dark: '#101010', // メインテキスト
      main: '#999999', // サブテキスト
      light: '#F5F5F5', // 背景
      contrastText: '#FFFFFF', // 白文字
    },
  },
});
