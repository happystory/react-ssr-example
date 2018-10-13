import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { actions } from './components/Header/store';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { renderRoutes(this.props.route.routes) }
      </div>
    );
  }
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo());
}

export default App;
