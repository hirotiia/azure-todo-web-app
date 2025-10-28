import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    neutral: {
      dark: '#101010', // メインテキスト
      main: '#999999', // サブテキスト
      light: '#F5F5F5', // 背景
      contrastText: '#FFFFFF', // 白文字
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'neutral',
      },
      styleOverrides: {
        root: { textTransform: 'none' },
      },
      variants: [
        // 👇 variant + color の組み合わせでスタイルを追加
        {
          props: { color: 'neutral', variant: 'contained' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral.dark, // ← dark を参照！
            color: theme.palette.neutral.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.neutral.main,
            },
          }),
        },
        {
          props: { color: 'neutral', variant: 'outlined' },
          style: ({ theme }) => ({
            color: theme.palette.neutral.dark,
            borderColor: theme.palette.neutral.dark,
            '&:hover': {
              color: theme.palette.neutral.contrastText,
              backgroundColor: theme.palette.neutral.dark,
              borderColor: theme.palette.neutral.dark,
            },
          }),
        },
      ],
    },
  },
});
