import React from 'react'
import { Card } from 'react-bootstrap'
import "./index.css"

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const {recipe} = this.props;

        return (
            <Card className="recipe">
                <Card.Img variant="top" src={recipe.img} />
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>
                        {recipe.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default RecipeCard;
