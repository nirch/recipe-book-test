import React from 'react'
import RecipeNavbar from '../../components/RecipeNavbar'
import Users from '../../data-model/Users'
import { Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import RecipeGallery from '../../components/RecipeGallery'
import './index.css'


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

        // const recipesView = recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>) 

        return (
            <div>
                <RecipeNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <Container>
                    <div className="greeting">
                        <h1>{activeUser.fname}'s Recipes</h1>
                        <Button variant="primary">New Recipe</Button>
                    </div>
                    <RecipeGallery recipes={recipes}/>
                </Container>
            </div>
        );
    }
}

export default RecipesPage