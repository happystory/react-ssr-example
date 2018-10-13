import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '../routes';
import { getClientStore } from '../store';

const store = getClientStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
