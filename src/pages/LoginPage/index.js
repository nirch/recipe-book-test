import React from 'react';
import {Form, Button} from 'react-bootstrap'
import "./index.css"


class LoginPage extends React.Component {


    render() {
        return (
            <div class="login">
                <h1>Login to Recipe Book</h1>
                <p>or <a href="#/signup">create an account</a></p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success" type="button" block>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginPage;
