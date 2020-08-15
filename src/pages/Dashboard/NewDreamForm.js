import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';
import { postEntry } from '../../helpers/requests'
import { newEntry } from '../../actions/index';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const NewDreamForm = () => {
    let todayDate = parseInt(moment().date())
    let todayMonth = parseInt(moment().month()) 
    let todayYear = parseInt(moment().year())
    let todayString = moment().format("YYYY-MM-DD")
    // let todayString = moment([todayYear, todayMonth, todayDate]).format("dddd, MMMM Do YYYY")

    let dispatch = useDispatch()
    const { transcript, resetTranscript } = useSpeechRecognition()
    
    let [title, setTitle] = useState("")
    let [date, setDate] = useState(todayString)
    let [description, setDescription] = useState("")
    let [recording, setRecording] = useState(false)

    let user = useSelector(state => state.updateUser.user)

    useEffect(() => {
        setDescription(transcript)
    },[transcript])
    // Speech to text
   
    
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    const handleRecording = () => {
        
        if (!recording){
            setRecording(!recording)
            SpeechRecognition.startListening({ continuous: true })
            setDescription(transcript)
        } else {
            setRecording(!recording)
            SpeechRecognition.stopListening()
        }
    }

    const handleReset = e => {
        e.preventDefault()
        resetTranscript()
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        let entryObj = {
            title: title, 
            date: moment(date).format("dddd, MMMM Do YYYY"), 
            description: description, 
            user_id: localStorage.user_id
        }
        
        if (title !== "" && description !== "") {
            postEntry(entryObj).then(entry => {
            console.log(entry)
            dispatch(newEntry(entry))
            setTitle("")
            setDate("")
            setDescription("")
            resetTranscript()
        })}
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
                    {!recording? <img onClick={handleRecording} id="microphone-icon" src='/media/mic-circle-sharp.svg' alt="record"/> : 
                        <> 
                        <button onClick={handleRecording}>Stop</button>
                        <button onClick={handleReset}>Reset</button>
                        </>    
                    }
                    <Form.Control as="textarea" type="textarea" name="description" id="dream-description-form" placeholder="Describe your dream with as much detail as possible" onChange={e => setDescription(e.target.value)} value={description}/>
                </Col>
            </Row>           
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default NewDreamForm
