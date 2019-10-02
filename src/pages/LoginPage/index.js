import React from 'react';
import {Form, Button} from 'react-bootstrap'
import "./index.css"


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            emailInput: "",
            pwdInput: ""
        }

        this.login = this.login.bind(this);
    }


    updateEmail(emailInput) {
        this.setState({emailInput});
    }

    updatePwd(pwdInput) {
        this.setState({pwdInput});
    }

    login() {
        const {emailInput, pwdInput} = this.state;

        alert(emailInput + pwdInput);
    }

    render() {
        return (
            <div className="login">
                <h1>Login to Recipe Book</h1>
                <p>or <a href="#/signup">create an account</a></p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.emailInput} onChange={ev => this.updateEmail(ev.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.pwdInput} onChange={ev => this.updatePwd(ev.target.value)}/>
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
