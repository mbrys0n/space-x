import React from 'react';
import Routes from 'components/Routes';
import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';

const theme = createTheme();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SpaceX
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
