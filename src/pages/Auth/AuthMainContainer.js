import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AuthLoginForm from './AuthLoginForm';
import AuthRegisterForm from './AuthRegisterForm';



const AuthMainContainer = () => {
    return (
        <Container>
            <Row>
                <Col>Register or Login Below</Col>
            </Row>
            <Row>
                <Col>
                    <AuthRegisterForm />
                </Col>
                <Col>
                    <AuthLoginForm />
                </Col>
            </Row>
        </Container>
    )
}



export default AuthMainContainer
