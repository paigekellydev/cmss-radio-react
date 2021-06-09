import './stylesheets/App.css';
import React, { Component } from 'react';
import LoginPage from './containers/LoginPage'
import Home from './containers/Home';

class App extends Component {

  state = {
    username: "",
    display: "login"
  }

  login = (event) => {
    this.setState({username: event.target.username.value})
    if (event.target.username.value.length > 0) {
      this.setState({display: "home"})
    }
  }

  display = () => {
    if (this.state.display === "login") {
      return <LoginPage state={this.state} login={this.login}/>
    } else if (this.state.display === "home") {
      return <Home state={this.state}/>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {this.display()}
      </div>
    );
  }
}

export default App;

