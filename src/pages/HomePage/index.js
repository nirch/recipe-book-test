import React from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';


class HomePage extends React.Component {


    render() {
        return (
            <Jumbotron>
                <Container>
                    <h1 class="display-3">Recipe Book</h1>
                    <p>Master Your Recipes</p>
                    <p>
                        <Button variant="primary" href="#/login">Login</Button>
                    </p>
                </Container>
            </Jumbotron>
        );
    }
}

export default HomePage;
