import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';
import { postEntry } from '../../helpers/requests'
import { newEntry } from '../../actions/index';



const NewDreamForm = () => {
    let todayDate = parseInt(moment().date())
    let todayMonth = parseInt(moment().month()) 
    let todayYear = parseInt(moment().year())
    let todayString = moment([todayYear, todayMonth, todayDate]).format("YYYY-MM-DD")
    

    let dispatch = useDispatch()

    let [title, setTitle] = useState("")
    let [date, setDate] = useState(todayString)
    let [description, setDescription] = useState("")
    console.log(title, date, description)
    let user = useSelector(state => state.updateUser.user)

    let current_user_id = !!user ? user.id : 1

    const handleSubmit = (e) => {
        e.preventDefault()
        let entryObj = {
            title: title, 
            date: date, 
            description: description, 
            user_id: current_user_id
        }
        postEntry(entryObj).then(entry => {
            console.log(entry)
            dispatch(newEntry(entry))
            setTitle("")
            setDate("")
            setDescription("")
        })
    }

    return (
        <Form id="new-dream-form" onSubmit={(e) => handleSubmit(e)}>
            <Row>
                <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Give your dream a title." onChange={e => setTitle(e.target.value)} value={title}/>
                </Col>
                <Col>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" onChange={e => setDate(e.target.value)} value={date}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Description</Form.Label><br/>
                    <img id="microphone-icon" src='/media/mic-circle-sharp.svg' alt="record"/>
                    <Form.Control as="textarea" type="textarea" name="description" id="dream-description-form" placeholder="Describe your dream with as much detail as possible" onChange={e => setDescription(e.target.value)} value={description}/>
                </Col>
            </Row>           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default NewDreamForm
