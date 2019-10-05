import React from 'react'
import {Row, Col} from 'react-bootstrap'
import RecipeCard from '../RecipeCard'

class RecipeGallery extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {

        const recipes = this.props.recipes.map(recipe =>
            <Col lg="4" md="6" key={recipe.id} className="my-1">
                <RecipeCard recipe={recipe}/>
            </Col>
        )

        return (
            <div>
                <Row>
                    {recipes}
                </Row>
            </div>   
        )
    }
}

export default RecipeGallery;
