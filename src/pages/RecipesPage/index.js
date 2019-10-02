import React from 'react'
import RecipeNavbar from '../../components/RecipeNavbar'
import Users from '../../data-model/Users'
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'


class RecipesPage extends React.Component {

    constructor(props) {
        super(props);
        
        // this.state = {
        //     recipes: this.props.recipes
        // }
    }
        
    render() {
        const {activeUser, recipes, handleLogout} = this.props;

        if (!activeUser) {
            return <Redirect to="/"/>
        }

        const recipesView = recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>) 

        return (
            <div>
                <RecipeNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <Container>
                    <h1>{activeUser.fname}'s Recipes</h1>
                    {recipesView}
                </Container>
            </div>
        );
    }
}

export default RecipesPage