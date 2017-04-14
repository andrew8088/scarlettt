import React, { Component } from 'react';
import Head from '../components/Head';
import { auth } from '../lib/db';
import redirect from 'next-redirect';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    };

    this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(field) {
    return evt => {
      this.setState({ [field]: evt.target.value })
    };
  }

  signup() {
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => redirect({}, '/'))
      .catch(err => console.log(err));
  }

  signin() {
    const { email, password } = this.state;
    auth.signInWithEmailAndPassword(email, password)
      .then(() => redirect({}, '/'))
      .catch(err => console.log(err));
  }

  render() {
    return <div>
      <Head />
      <section>
        <h1> Login </h1> 

        <p>
          <label>Email:</label>
          <input
            value={this.state.email}
            onChange={this.onChange('email')}
          />
        </p>
        <p>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange('password')}
          />
        </p>
        <p>
          <button onClick={this.signup}> Sign Up </button>
        </p>
        <p>
          <button onClick={this.signin}> Sign In </button>
        </p>
      </section>
    </div>;
  }
}

export default Login;
