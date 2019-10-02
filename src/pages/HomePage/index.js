import React from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import RecipeNavbar from "../../components/RecipeNavbar/"


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <RecipeNavbar activeUser={this.props.activeUser}/>
                <Jumbotron>
                    <Container>
                        <h1 class="display-3">Recipe Book</h1>
                        <p>Master Your Recipes</p>
                        <p>
                            <Button variant="primary" href="#/login">Login</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;
