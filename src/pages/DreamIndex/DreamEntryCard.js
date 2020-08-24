import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Divider, Transition} from 'semantic-ui-react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { patchEntry } from '../../helpers/requests'
import { updateEntry } from '../../actions/index';
import {useDispatch} from 'react-redux'
import SpeechSynthesis from './SpeechSynthesis';
import ReactSay from './ReactSay';
import SpeechKit from './SpeechKit';
import moment from 'moment'







const DreamEntryCard = props => {
    let [editToggle, setEditToggle] = useState(false)
    let [title, setTitle] = useState(props.title)
    let [description, setDescription] = useState(props.description)
    // let [interpretation, setInterpretation] = useState(props.interpretation)
    let dispatch = useDispatch()

    const handleSubmit = () => {
        setEditToggle(!editToggle)
        let updateId = props.id
        let updateObj = { title: title, description: description }
        patchEntry(updateObj, updateId).then(data => {
            dispatch(updateEntry(data))  
        })
    }

    

    return (
        <Card bg={"dark"} text="white" className="entry-card">
            <Card.Header as="h2">{props.date}</Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col className="entry-title">
                            {!editToggle ? <Card.Title className="entry-card-title" as="h3">{props.title}</Card.Title> : <Form.Control type="text" name="title" onChange={e => setTitle(e.target.value)} value={title}/>}
                        </Col>
                    </Row>
                    {/* <Row className="entry-card-divider"></Row> */}
                    <Row><Col className="entry-card-subheading"><h4>Description</h4></Col></Row>
                    <Row>
                        <Col className="entry-card-content">
                            {!editToggle ? 
                            <Card.Text>{props.description}</Card.Text> :
                            <Form.Control as="textarea" type="textarea" name="description" id="dream-description-form" onChange={e => setDescription(e.target.value)} value={description}/>}
                        </Col>
                    </Row>
                    {/* <Row className="entry-card-divider"></Row> */}
                    {/* <Row><Col className="entry-card-subheading"><h4>interpretation</h4></Col></Row> */}
                    <Row>
                        <Col className="entry-card-content">
                            
                        </Col>
                    </Row>
                    <Row id="entry-card-button-row">
                        <Col>
                            {!editToggle ? <Button inverted onClick={() => setEditToggle(!editToggle)} >Edit</Button> : <Button inverted onClick={handleSubmit}>Save Changes</Button>}
                        </Col>
                        <Col>
                            <SpeechKit id={props.id} text={`${props.title}. Dreamt on ${props.date}. ${props.description}`}/>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default DreamEntryCard
