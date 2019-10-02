import React from 'react'
import RecipeNavbar from '../../components/RecipeNavbar'
import Users from '../../data-model/Users'
import { Container } from 'react-bootstrap';
import {Redirect} from 'react-router-dom'


class RecipesPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activeUser: Users.getActiveUser()
        }
    }
    



    render() {
        const {activeUser} = this.state;

        if (!activeUser) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <RecipeNavbar/>
                <Container>
                    <h1>{activeUser.fname}'s Recipes</h1>
                </Container>
            </div>
        );
    }
}

export default RecipesPage