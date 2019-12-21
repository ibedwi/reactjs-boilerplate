import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '../helpers/router.helper';

import ExampleClassPage from '../pages/ExamplePageClass/Example.pages';
import ExamplePage from '../pages/ExamplePages/Example.pages';


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path='/'
          exact
          component={ExamplePage}
        />
        <PublicRoute
          path='/class-page'
          exact
          component={ExampleClassPage}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes