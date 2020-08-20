import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DreamEntryCard from './DreamEntryCard';

const DreamEntryContainer = props => {

    return (
        <Container id="dream-entry-container" fluid>
            <Row>
                <Col>
                    {props.entries.map(entry => 
                    <DreamEntryCard {...entry} key={entry.id}/>
                    ) }
                </Col>
            </Row>
        </Container>
    )
}

export default DreamEntryContainer
