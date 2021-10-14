import React, { ReactElement } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from '../view/pages';

import { routes } from '.';

export default function IndexRouter(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path={routes.index} component={Home} />
      </Switch>
    </Router>
  );
}
