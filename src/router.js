import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Index from './routes/Index';
import Dropdown from './routes/Dropdown';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/index" exact component={Index} />
        <Route path="/dropdown" exact component={Dropdown} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
