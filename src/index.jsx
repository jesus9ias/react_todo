import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import Todos from './components/Todos';
import NewTodo from './components/Todos/NewTodo';
import EditTodo from './components/Todos/EditTodo';
import Settings from './components/Settings';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="todos" component={Todos}>
        <Route path="new" components={{ new: NewTodo }} />
        <Route path=":id" components={{ edit: EditTodo }} />
      </Route>
      <Route path="settings" component={Settings} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>,
  document.getElementById('general')
);
