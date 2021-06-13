import React, { Component } from 'react';
import AddGenreForm from '../components/AddGenreForm';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

class LoginPage extends Component {

    state = {
        display: "login"
    }

    selectLogin = () => {
        this.setState({display: "login"})
    }

    selectSignUp = () => {
        this.setState({display: "sign-up"})
    }

    displayForm = () => {
        if (this.state.display === "sign-up") {
            return (
                <SignUpForm 
                    state={this.props.state} 
                    login={this.props.login}
                    selectLogin={this.selectLogin}
                    />
                    ) 
        } else if (this.state.display === "login") {
            return (
                <LoginForm 
                    state={this.props.state} 
                    login={this.props.login}
                    selectSignUp={this.selectSignUp}
                />
            )
        }
    }

    render() {
        return (
            <div>
                {this.displayForm()}
                {/* <AddGenreForm /> */}
            </div>
        );
    }
}

export default LoginPage;


