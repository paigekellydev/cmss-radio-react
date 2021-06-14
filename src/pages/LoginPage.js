import React, { Component } from 'react';
import AddGenreForm from '../forms/AddGenreForm';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';

class LoginPage extends Component {

    // state = {
    //     display: "login"
    // }

    // selectLogin = () => {
    //     this.setState({display: "login"})
    // }

    // selectSignUp = () => {
    //     this.setState({display: "sign-up"})
    // }

    // displayForm = () => {
    //     if (this.state.display === "sign-up") {
    //         return (
    //             <SignUpForm 
    //                 state={this.props.state} 
    //                 login={this.props.login}
    //                 selectLogin={this.selectLogin}
    //                 />
    //                 ) 
    //     } else if (this.state.display === "login") {
    //         return (
    //             <LoginForm 
    //                 state={this.props.state} 
    //                 login={this.props.login}
    //                 selectSignUp={this.selectSignUp}
    //                 handleLogin={this.props.handleLogin}
    //             />
    //         )
    //     }
    // }

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


