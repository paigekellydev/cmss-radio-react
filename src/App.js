import './stylesheets/App.css';
import { useState, useEffect } from 'react';
import LoginPage from './containers/LoginPage'
import Home from './containers/Home';
import ProtectedUsersButton from './components/ProtectedUsersButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// class App extends Component {

//   state = {
//     username: "",
//     display: "login",
//     user: {}
//   }

//   //  need to check if username exists
//   login = (event) => {
//     this.setState({username: event.target.username.value})
//     if (event.target.username.value.length > 0) {
//       this.setState({display: "home"})
//     }
//   }

//   display = () => {
//     if (this.state.display === "login") {
//       return <LoginPage state={this.state} login={this.login}/>
//     } else if (this.state.display === "home") {
//       return <Home state={this.state}/>
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//         </header>
//         {this.display()}
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react'
import LoginForm from './components/LoginForm';

export default function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  useEffect(() => {
    if(localStorage.token) {
      fetch('http://cmss-radio-api.herokuapp.com/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.error) {
            console.error(result.error)
          } else {
            console.log(result)
            handleLogin();
          }
        })
    }
  }, [])
  
  
  return (
    <div>
      <LoginForm handleLogin={handleLogin}/>
      {isLoggedIn
        ? <ProtectedUsersButton />
        : null
      }
    </div>
  )
}
