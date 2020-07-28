import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Calculate from './components/Calculate';
import Home from './components/Home';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout className="h-100">
        <Route path='/' exact component={Home} />
        <Route path='/calculate' component={Calculate} />
      </Layout>
    );
  }
}
