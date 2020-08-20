import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions'

const PlanetButton = () => {
    return (
        <>
            <img
                alt=""
                src="/navbar_logo.png"
                width="120"
                height="120"
                className="d-inline-block align-top"
                // onClick={goToHome}
            />
        </>
    )
}

export default PlanetButton
