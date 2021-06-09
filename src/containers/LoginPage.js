import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import LoginSignUp from '../components/LoginSignUp';
import SignUpForm from '../components/SignUpForm';

class LoginPage extends Component {

    state = {
        display: "start"
    }

    selectLogin = () => {
        this.setState({display: "login"})
    }

    selectSignUp = () => {
        this.setState({display: "sign-up"})
    }

    displayForm = () => {
        if (this.state.display === "start") {
            return (
                <LoginSignUp
                    selectLogin={this.selectLogin} 
                    selectSignUp={this.selectSignUp}
                />
            )
        } else if (this.state.display === "sign-up") {
            return <SignUpForm state={this.props.state} login={this.props.login}/> 
        } else if (this.state.display === "login") {
            return <LoginForm state={this.props.state} login={this.props.login}/>
        }
    }

    render() {
        return (
            <div>
                {this.displayForm()}
            </div>
        );
    }
}

export default LoginPage;


