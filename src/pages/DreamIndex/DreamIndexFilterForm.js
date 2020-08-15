import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment';
import { searchDescription, changeDate, sortDateAscending } from '../../actions/index';

const DreamIndexFilterForm = () => {
    return (
        <div>
            <h1>Filter</h1>
        </div>
    )
}

export default DreamIndexFilterForm
