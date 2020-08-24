import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions'

const PlanetMomButton = () => {
    return (
        <>
            <img
                alt=""
                src="/media/mom-planet-button.png"
                width="120"
                height="120"
                className="d-inline-block align-top"
                // onClick={goToHome}
            />
        </>
    )
}

export default PlanetMomButton
