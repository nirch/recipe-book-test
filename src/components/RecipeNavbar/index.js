import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'



class RecipeNavbar extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        const loginLink = !this.props.activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const signupLink = !this.props.activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null;
        const logoutLink = this.props.activeUser ? <Nav.Link href="#/logout">Logout</Nav.Link> : null;


        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/#/">Recipe Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Recipes</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        {loginLink}
                        {signupLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default RecipeNavbar;