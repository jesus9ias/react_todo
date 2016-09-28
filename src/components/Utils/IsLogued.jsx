import React from 'react';
import storage from 'key-storage';
import { browserHistory } from 'react-router';
import firebase from 'firebase';

export default function IsLogued(Component) {
  class LoguedComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        logued: false
      };
    }

    componentWillMount() {
      browserHistory.push('/login');
    }

    render() {
      if (this.state.logued) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }

  return LoguedComponent;
}
