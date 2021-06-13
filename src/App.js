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
import React from 'react'

export default function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const [display, setDisplay] = useState('login')
  
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const displayItems = () => {
    if (isLoggedIn) {
      return (
        <>
          <Home user={user}/>
          <ProtectedUsersButton />
        </>
      )
    } else {
      return <LoginPage handleLogin={handleLogin}/>
    }
  }

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
            // return error pop-up username does not exist component, would you like to sign up
          } else {
            setUser(result)
            handleLogin();
          }
        })
    }
  }, [])
  
  
  return (
    <div>
      {displayItems()}
    </div>
  )
}
