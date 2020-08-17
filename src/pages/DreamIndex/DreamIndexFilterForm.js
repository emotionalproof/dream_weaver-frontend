import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const DreamIndexFilterForm = props => {
    return (
        <Form>
            <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={9}>
                    <Form.Group controlId="searchInput">
                    <Form.Label>Search your Dreams by entering symbols from your dream below...</Form.Label>
                    <Form.Control value={props.searchText} onChange={(e) => props.handleSearch(e.target.value)} type="text" placeholder="No need to press to press a search button, just start typing." />
                    </Form.Group>
                </Col>
            </Row>
            </Container>
        </Form>
    )
}

export default DreamIndexFilterForm
