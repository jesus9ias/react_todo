import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import {
  TodosContainer,
  EditTodoContainer,
  NewTodoContainer
} from './components/Todos';
import Settings from './components/Settings';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import theApp from './redux/reducers';
import logger from './redux/middleware/logger';

import { generalActions } from './redux/actions';

let store = applyMiddleware(
  thunk,
  logger
)(createStore)(theApp);

store.dispatch(generalActions.load_client_data());

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="todos" component={TodosContainer}>
          <Route path="new" components={{ new: NewTodoContainer }} />
          <Route path=":id" components={{ edit: EditTodoContainer }} />
        </Route>
        <Route path="settings" component={Settings} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById('general')
);
