import './stylesheets/App.css';
import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import PrivateAdminRoute from './components/PrivateAdminRoute';
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import AddGenreForm from './forms/AddGenreForm';
import AddArtistForm from './forms/AddArtistForm';
import AddSongForm from './forms/AddSongForm';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import Header from './components/Header';
import ProtectedUsersButton from './components/ProtectedUsersButton';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProtectedUsersButton from './components/ProtectedUsersButton';
const baseUrl = 'https://cmss-radio-api.herokuapp.com/'

export default class App extends Component {
  
  state = {
    user: {},
    error: {}
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch(baseUrl + 'profile', {
        headers: { Authorization: `Bearer ${localStorage.token}`}
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error)
          } else {
            this.setState({ user: result })
          }
        })
    }
  }
  
  login = (username, password, history) => {
    fetch(baseUrl + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {user: 
          { 
            username, 
            password 
          }
        })
    }, [])
    .then(response => response.json())
    .then(result => {
      if (result.token) {
        this.setState({user: result.user})
        localStorage.setItem('token', result.token)
        history.push('/')
      } else {
        this.setState({error: result.error})
      }
    })
  }
  
  signUp = (username, password, userEmail, firstName, lastName, authorized_user, history) => {
    fetch(baseUrl + 'users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify(
        {user: 
          { 
            username: username, 
            password: password, 
            email: userEmail, 
            first_name: firstName, 
            last_name: lastName,  
            authorized_user
          }
        }
        )
      })
      .then(response => response.json())
      .then(history.push('/login'))
  }

    render() {
      return (
        <div className="App">
          <Header user={this.state.user}/>
          {/* {displayItems()} */}
          <Switch>
            <Route 
              path="/login" 
              render={(routerProps) => <LoginForm {...routerProps} user={this.state.user} login={this.login}/>} 
            />
            <Route 
              path="/users" 
              render={(routerProps) => <ProtectedUsersButton {...routerProps} />} 
            />
            <Route 
              path="/sign-up" 
              render={(routerProps) => <SignUpForm {...routerProps} user={this.state.user} signUp={this.signUp}/>} 
            />
            <PrivateRoute exact path='/' component={HomePage} user={this.state.user} />
            <PrivateRoute exact path="/profile" component={ProfilePage} user={this.state.user} />
            <PrivateAdminRoute exact path="/add-genre" component={AddGenreForm} user={this.state.user} />
            <PrivateAdminRoute exact path="/add-artist" component={AddArtistForm} user={this.state.user} />
            <PrivateAdminRoute exact path="/add-song" component={AddSongForm} user={this.state.user} />
          </Switch>
        </div>
      )
  }
}





