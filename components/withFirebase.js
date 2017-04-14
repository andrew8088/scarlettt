import React from 'react';
import { auth } from '../lib/db';

const store = {
  user: null
};

export default function withFirebase(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: store.user
      };
      this.updateUserState = this.updateUserState.bind(this);
      this.logout = this.logout.bind(this);
    }

    componentDidMount() {
      this.unsubscribe = auth.onAuthStateChanged(this.updateUserState);
    }

    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe();
    }

    updateUserState(user) {
      store.user = user;
      this.setState({ user });
    }

    logout() {
      auth.signOut()
        .then(() => this.setState({ user: null }))
        .catch(err => console.log(err));
    }

    render() {
      const { user } = this.state;
      return <WrappedComponent user={user} logout={this.logout} {...this.props} />
    }
  };
}
