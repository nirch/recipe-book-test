import React from 'react'
import RecipeNavbar from '../../components/RecipeNavbar'
import { Container, Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';
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
            recipes: [],
            newRecipeImg: {
                file: null,
                URL: ""
            }
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.createRecipe = this.createRecipe.bind(this);
        this.imgChange = this.imgChange.bind(this);

        this.nameInput = React.createRef();
        this.descInput = React.createRef();
        this.imgInput = React.createRef();
    }

    imgChange(ev) {
        let newRecipeImg = {};
        newRecipeImg.file = ev.target.files[0];
        if (newRecipeImg.file) {
            newRecipeImg.URL = window.URL.createObjectURL(newRecipeImg.file);
            console.log(newRecipeImg.URL);
        } else {
            newRecipeImg.URL = "";
        }
        this.setState({ newRecipeImg });
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false, newRecipeImg: {file: null, URL: ""}});
    }

    createRecipe() {

        const RecipeParse = Parse.Object.extend('Recipe');
        const newRecipe = new RecipeParse();

        newRecipe.set('name', this.nameInput.current.value);
        newRecipe.set('desc', this.descInput.current.value);
        newRecipe.set('image', new Parse.File(this.nameInput.current.value + ".jpg", this.state.newRecipeImg.file));
        newRecipe.set('userId', Parse.User.current());

        newRecipe.save().then(result => {
            //   if (typeof document !== 'undefined') document.write(`Recipe created: ${JSON.stringify(result)}`);
            console.log('Recipe created', result);
            const recipes = this.state.recipes.concat(new Recipe(result));
            this.setState({ recipes, showModal: false, newRecipeImg: {file: null, URL: ""} });


        }, error => {
            if (typeof document !== 'undefined') document.write(`Error while creating Recipe: ${JSON.stringify(error)}`);
            console.error('Error while creating Recipe: ', error);
        }
        );
    }

    componentDidMount() {
        if (this.props.activeUser) {

            const RecipeParse = Parse.Object.extend('Recipe');
            const query = new Parse.Query(RecipeParse);
            query.equalTo("userId", Parse.User.current());
            query.find().then((results) => {
                console.log('Recipe found', results);
                const recipes = results.map(result => new Recipe(result));
                this.setState({ recipes });
            }, (error) => {
                console.error('Error while fetching Recipe', error);
            });
        }
    }

    render() {
        const { activeUser, handleLogout } = this.props;
        const { showModal, recipes, newRecipeImg } = this.state;

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
                                <Col sm={6}>
                                    <Form.Control ref={this.imgInput} type="file" placeholder="Recipe Image URL" onChange={this.imgChange} />
                                </Col>
                                <Col sm={4}>
                                    <Image src={newRecipeImg.URL} fluid />
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