import React from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      apiData: null
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.liftToken = this.liftToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  checkForLocalToken() {
    var token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      // Token is invalid or missing
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      })
    } else {
      //we found a token in localStorage, verify it
      axios.post('/auth/me/from/token', {token})
        .then( res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: res.data.message
            })  
          } else {
            localStorage.setItem('mernToken', res.data.token);
            this.setState({
              token: res.data.token,
              user: res.data.user, 
              errorMessage: ''
            })
          }  
        })
    }
  }
  //destructuring syntax example
  liftToken({token, user}) {
    this.setState({
      token,
      user
    })
  }

  logout() {
    //remove token from localStorage
    localStorage.removeItem('mernToken');
    //remove user and token from state
    this.setState({
      token: '',
      user: null
    })
	}


  componentDidMount() {
    this.checkForLocalToken()
  }

  render() {
    var user = this.state.user
    var contents 
    if (user) {
      contents = (
        <>
        <p>Hello, {user.name}</p>
        <p onClick={this.logout}>Logout</p>
        </>
      );
    } else {
      contents = (
        <>
          <h2>Please register or login.</h2>
          <Login liftToken={this.liftToken} />
          <Signup liftToken={this.liftToken} />
        </>
      );
    }
    return (
      contents
    );
  }
}


export default App;
