import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  signOut() {
    const { history } = this.props;
    history.push('/')
  }


  getUsers() {
    return [
      {
        username: '',
      },
    ];
  }

  render() {
    const { user, users, history } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3 pt-10 pb-10 m-auto">
        Thanks for registering as a health care provider with Availity. Check back in on the status of
        your application here.
          <div className="md:flex md:items-center pt-10 pb-10">
            <div className="md:w-2/3">
              <button onClick={(e) => {this.signOut(e)}} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Sign Out
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
