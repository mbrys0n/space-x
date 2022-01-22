import React from 'react';
import Routes from 'components/Routes';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';

const theme = createTheme();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
