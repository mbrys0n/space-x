import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { CountdownPage, LaunchesPage } from 'pages';

const Container = styled.main`
  grid-area: content;
  display: flex;
  flex: 1;
  margin: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Routes = (): JSX.Element => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <LaunchesPage />
        </Route>
        <Route path="/countdown">
          <CountdownPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
