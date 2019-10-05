import React from 'react'
import RecipeNavbar from '../../components/RecipeNavbar'
import { Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'
import RecipeGallery from '../../components/RecipeGallery'
import './index.css'
import Parse from 'parse'
import { Recipe } from '../../data-model/Recipe';


class RecipesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            recipes: []
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.createRecipe = this.createRecipe.bind(this);

        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.imgInput = React.createRef();
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    createRecipe() {
        const newRecipe = {
            name: this.nameInput.current.value,
            desc: this.descInput.current.value,
            img: this.imgInput.current.value
        }

        this.props.addRecipe(newRecipe);
        this.setState({ showModal: false });
    }

    componentDidMount() {
        if (this.props.activeUser) {

            const RecipeParse = Parse.Object.extend('Recipe');
            const query = new Parse.Query(RecipeParse);
            query.equalTo("userId", Parse.User.current());
            query.find().then((results) => {
                console.log('Recipe found', results);
                const recipes = results.map(result => new Recipe(result));
                this.setState({recipes});
            }, (error) => {
                console.error('Error while fetching Recipe', error);
            });
        }
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        const { showModal, recipes } = this.state;

        if (!activeUser) {
            return <Redirect to="/" />
        }

        // const recipesView = recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>) 

        return (
            <div>
                <RecipeNavbar activeUser={activeUser} handleLogout={handleLogout} />
                <Container>
                    <div className="greeting">
                        <h1>{activeUser.fname}'s Recipes</h1>
                        <Button variant="primary" onClick={this.showModal}>
                            New Recipe
                        </Button>
                    </div>
                    <RecipeGallery recipes={recipes} />
                </Container>
                <Modal show={showModal} onHide={this.hideModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>
                                    Name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.nameInput} type="text" placeholder="Recipe Name" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalDesc">
                                <Form.Label column sm={2}>
                                    Description
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.descInput} type="text" placeholder="Recipe Description" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalImg">
                                <Form.Label column sm={2}>
                                    Image URL
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control ref={this.imgInput} type="text" placeholder="Recipe Image URL" />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.createRecipe}>
                            Create Recipe
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default RecipesPage