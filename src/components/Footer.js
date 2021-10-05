import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

class Footer extends Component {
    render() {
        const {isAuthenticated} = this.props.auth0;

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand >Copy rights</Navbar.Brand>
                                            </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
