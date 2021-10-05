import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import LoginButton from './LoginButton';


export class Login extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>LogIn</Card.Title>
                        <Card.Text>
                            click below to login
                        </Card.Text>
                        <LoginButton/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Login
