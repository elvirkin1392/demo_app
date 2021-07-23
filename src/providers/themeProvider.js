import React from 'react';
import { ThemeProvider as StyleThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { alpha, darken } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
const palette = {
  primary: '#fff',
  secondary: '#fff',
  error: '',
  warning: '#fff',
  info: '#fff',
  success: '#fff',
  textPrimary: '#fff',
  textSecondary: '#fff',
};

const themeConfig = createTheme({
  palette: {
    primary: {
      light: alpha(palette.primary, 0.1),
      main: palette.primary,
      dark: darken(palette.primary, 0.1),
    },
    secondary: {
      light: alpha(palette.secondary, 0.1),
      main: palette.secondary,
      dark: darken(palette.secondary, 0.1),
    },
    warning: {
      light: alpha(palette.warning, 0.1),
      main: palette.warning,
    },
    error: {
      light: alpha(palette.warning, 0.1),
      main: palette.warning,
    },
    info: {
      light: alpha(palette.info, 0.1),
      main: palette.info,
    },
    success: {
      light: alpha(palette.success, 0.1),
      main: palette.success,
    },
    text: {
      primary: palette.textPrimary,
      secondary: palette.textSecondary,
    },
    background: {
      default: '#f4f7fc',
    },
  },})

const theme = createTheme({themeConfig})
function ThemeProvider(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <StyleThemeProvider theme={theme}>{props.children}</StyleThemeProvider>
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
