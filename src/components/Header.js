import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        const {isAuthenticated} = this.props.auth0;

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand >Watch World</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/Profile'>Profile</Link>
                            <Link to='FavWatch'>Fav Watch</Link> 
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
