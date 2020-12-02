import React from 'react';
import './css/tailwind.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route exact path="/about"></Route>
      <Route exact path="/contact"></Route>
    </Switch>
    <Footer />
  </Router>
);
export default App;
