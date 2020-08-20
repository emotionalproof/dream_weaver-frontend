import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Divider, Transition} from 'semantic-ui-react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';
import { postEntry } from '../../helpers/requests'
import { newEntry } from '../../actions/index';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const NewDreamForm = () => {
    // let todayDate = parseInt(moment().date())
    // let todayMonth = parseInt(moment().month()) 
    // let todayYear = parseInt(moment().year())
    let todayString = moment().format("YYYY-MM-DD")
    // let todayString = moment([todayYear, todayMonth, todayDate]).format("dddd, MMMM Do YYYY")
    
    let dispatch = useDispatch()
    const { transcript, resetTranscript } = useSpeechRecognition()
    
    let [title, setTitle] = useState("")
    let [date, setDate] = useState(todayString)
    let [description, setDescription] = useState("")
    let [recording, setRecording] = useState(false)
    let [visible, setVisible] = useState(false)

    // let user = useSelector(state => state.updateUser.user)
    const toggleForm = () => {
        setVisible(!visible)
    }

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
        let formattedDate = moment(date).format("dddd, MMMM Do YYYY")
        let entryObj = {
            title: title, 
            date: formattedDate, 
            description: description, 
            user_id: localStorage.user_id
        }
        
        if (title !== "" && description !== "") {
            postEntry(entryObj).then(entry => {
            dispatch(newEntry(entry))
            setTitle("")
            setDate(todayString)
            setDescription("")
            resetTranscript()
        })}
    }

    return (
        <>
        <Button
            className="custom-button"
            inverted
            content={visible ? 'Hide Form' : 'Add New Dream Entry'}
            onClick={toggleForm}
        />
        <Divider hidden />
        <Transition visible={visible} animation='scale' duration={500}>
        <Form id="new-dream-form" onSubmit={(e) => handleSubmit(e)}>
            <Row>
                <Col>
                    <Form.Label className="new-entry-label">Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Give your dream a title." onChange={e => setTitle(e.target.value)} value={title}/>
                </Col>
                <Col>
                    <Form.Label className="new-entry-label">Date</Form.Label>
                    <Form.Control type="date" name="date" onChange={e => setDate(e.target.value)} value={date}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label className="new-entry-label">Description</Form.Label><br/>
                    {!recording? <img onClick={handleRecording} id="microphone-icon" src='/media/mic-circle-sharp.svg' alt="record"/> : 
                        <> 
                        <button onClick={handleRecording}>Stop</button>
                        <button onClick={handleReset}>Reset</button>
                        </>    
                    }
                    <Form.Control as="textarea" type="textarea" name="description" id="dream-description-form" placeholder="Describe your dream with as much detail as possible" onChange={e => setDescription(e.target.value)} value={description}/>
                </Col>
            </Row> 
            <div id="new-entry-submit-button" className="new-entry-label">
                <Button  className="custom-button" inverted type="submit">Submit</Button>
            </div>          
        </Form>
        </Transition>
        </>
    )
}

export default NewDreamForm
