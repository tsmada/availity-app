import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    this.logout();

    this.state = {
      email: '',
      password: '',
      submitted: false,
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.login(email, password);
    }
  }

  login = (email, password) => {
    const { history } = this.props;
    // if email and password match persisted store, let them in
    this.setState({ loggedIn: true });
    history.push('/home');
  }

  logout() {
    this.setState({ username: null, password: null });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <LoginForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
      </div>
    );
  }
}

export default Login;
