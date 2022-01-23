import React from 'react';
import { Container, Paper } from '@mui/material';

interface Props {
  heading: string;
  children?: React.ReactElement | React.ReactElement[];
}

const Page = ({ children, heading }: Props): JSX.Element => {
  return (
    <Container component="main" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <h3 role={'heading'}>{heading}</h3>
        {children}
      </Paper>
    </Container>
  );
};

export default Page;
