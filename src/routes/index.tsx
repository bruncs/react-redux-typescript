import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import PublicRoute from './public';
import PrivateRoute from './private';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" page={Login} />
      <PrivateRoute exact path="/dashboard" page={Dashboard} />
      <PrivateRoute path="*" page={NotFound} />
    </Switch>
  </BrowserRouter>
  );

export default Routes;
