import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { patchEntry } from '../../helpers/requests'
import { updateEntry } from '../../actions/index';
import {useDispatch} from 'react-redux'
import moment from 'moment'

const API_BASE = "http://localhost:3002/api/v1"

const DreamEntryCard = props => {
    let [editToggle, setEditToggle] = useState(false)
    let [title, setTitle] = useState(props.title)
    let [description, setDescription] = useState(props.description)
    let [interpretation, setInterpretation] = useState(props.interpretation)
    let dispatch = useDispatch()

    const handleSubmit = () => {
        setEditToggle(!editToggle)
        let updateId = props.id
        let updateObj = { title: title, description: description }
        patchEntry(updateObj, updateId).then(data => {
            console.log(data)
            dispatch(updateEntry(data))
            
        })
    }

    console.log(moment(props.date).format("YYYY-MM-DD"))
    return (
        <Card className="entry-card">
            <Card.Header as="h2">{moment(props.date).format("dddd, MMMM Do YYYY")}</Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col className="entry-title">
                            {!editToggle ? <Card.Title className="entry-card-title" as="h3">{props.title}</Card.Title> : <Form.Control type="text" name="title" onChange={e => setTitle(e.target.value)} value={title}/>}
                        </Col>
                    </Row>
                    <Row className="entry-card-divider"></Row>
                    <Row><Col className="entry-card-subheading"><h4>Description</h4></Col></Row>
                    <Row>
                        <Col className="entry-card-content">
                            {!editToggle ? 
                            <Card.Text>{props.description}</Card.Text> :
                            <Form.Control as="textarea" type="textarea" name="description" id="dream-description-form" onChange={e => setDescription(e.target.value)} value={description}/>}
                        </Col>
                    </Row>
                    <Row className="entry-card-divider"></Row>
                    <Row><Col className="entry-card-subheading"><h4>interpretation</h4></Col></Row>
                    <Row>
                        <Col className="entry-card-content">
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {!editToggle ? <Button onClick={() => setEditToggle(!editToggle)} variant="primary">Edit</Button> : <Button variant="primary"onClick={handleSubmit}>Save Changes</Button>}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default DreamEntryCard
