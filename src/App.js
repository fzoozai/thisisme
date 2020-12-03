import React from 'react';
import './css/tailwind.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Profile from './components/Profile';
import GithubRepos from './components/GithubRepos';
import TechnologyOverview from './components/TechnologyOverview';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Profile />
        <hr />
        <GithubRepos />
        <hr />
        <TechnologyOverview />
      </Route>
      <Route exact path="/about"></Route>
      <Route exact path="/contact"></Route>
    </Switch>
    <hr />
    <Footer />
  </Router>
);
export default App;
