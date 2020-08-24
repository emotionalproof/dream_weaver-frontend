import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LearnASymbolComponent from './LearnASymbolComponent'

const DashboardLeftContainer = () => {
    return (
        <Container id="dashboard-left-container">
            <Row>
                <Col>
                    <LearnASymbolComponent />
                </Col>
            </Row>
        </Container>
    )
}

export default DashboardLeftContainer
