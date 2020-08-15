import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export const Col 

import Container from 'react-bootstrap/Container'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';
import {useParams} from 'react-router-dom'
import { postEntry } from '../../helpers/requests'
import { newEntry } from '../../actions/index';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const DashboardImports = {
    React, 
    useState, 
    Form, 
    Button, 
    Row, 
    Col, 
    Container, 
    useSelector, 
    useDispatch, 
    moment, 
    useParams, 
    SpeechRecognition,
    useSpeechRecognition
}

export default DashboardImports