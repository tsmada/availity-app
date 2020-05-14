import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        npi: '',
        password: '',
        telephone: '',
        email: '',
        city: '',
        state: '',
        zip: '',
      },
      submitted: false,
      registered: false,
    };
  }

  handleChange = (event) => {
    if (!event) {
      return;
    }
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit = (event) => {
    if (!event){
      return;
    }
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.firstName && user.lastName && user.npi && user.telephone && user.email && user.state && user.zip) {
      this.register(user);
    }
  }

  register() {
    const { history } = this.props;
    this.setState({
      registered: true,
    });
    history.push('/home');
  }

  render() {
    const { user, submitted, registered } = this.state;
    if (submitted && !registered) {
      return (
        <div>Something went wrong with your registration...</div>
      );
    }
    return (
      <div>
        <RegistrationForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          user={user}
        />
      </div>
    );
  }
}

export default Register;
