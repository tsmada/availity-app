import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';

const App = ({ history }) => (
  <div>
    <Header />
    <div className="container mx-auto px-4">
      <div className="flex mb-4">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Redirect from="*" to={Login} />
          </Switch>
        </Router>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
