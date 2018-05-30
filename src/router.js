import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Index from './routes/Index';
import Dropdown from './routes/Dropdown';
import Flex from './routes/Flex';
import Layout from './routes/Layout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/index" exact component={Index} />
        <Route path="/dropdown" exact component={Dropdown} />
        <Route path="/flex" exact component={Flex} />
        <Route path="/layout" exact component={Layout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
