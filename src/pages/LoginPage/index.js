import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import "./index.css"
import { Redirect } from 'react-router-dom'
import Parse from 'parse'
import { User } from '../../data-model/User';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailInput: "nir@nir.com",
            pwdInput: "123",
            invalidCredentials: false,
            loginSuccess: false
        }

        this.login = this.login.bind(this);
    }


    updateEmail(emailInput) {
        this.setState({ emailInput });
    }

    updatePwd(pwdInput) {
        this.setState({ pwdInput });
    }

    login() {
        const { emailInput, pwdInput } = this.state;
        const { handleLogin } = this.props;

        Parse.User.logIn(emailInput, pwdInput).then((user) => {
            // Do stuff after successful login
            let activeUser = new User(user);
            console.log('Logged in user', activeUser);
            handleLogin(activeUser);
            this.setState({ loginSuccess: true });
        }).catch(error => {
            console.error('Error while logging in user', error);
            this.setState({ invalidCredentials: true });
        });
    }

    render() {


        if (this.state.loginSuccess) {
            return <Redirect to="/recipes" />
        }

        return (
            <div className="login">
                <h1>Login to Recipe Book</h1>
                <p>or <a href="#/signup">create an account</a></p>
                <Alert show={this.state.invalidCredentials} variant="danger">
                    Invalid email or password!
                </Alert>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.emailInput} onChange={ev => this.updateEmail(ev.target.value)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.pwdInput} onChange={ev => this.updatePwd(ev.target.value)} />
                    </Form.Group>
                    <Button variant="success" type="button" block onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginPage;
