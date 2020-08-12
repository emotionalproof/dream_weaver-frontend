import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewDreamForm from './NewDreamForm';
import RecentEntriesContainer from './RecentEntriesContainer';


const DashboardRightContainer = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <NewDreamForm />
                </Col>
            </Row>
            <Row>
                <Col>
                    <RecentEntriesContainer />
                </Col>
            </Row>
            
        </Container>
    )
}

export default DashboardRightContainer
