import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions'

const OrbitHomeButton = () => {
    let dispatch = useDispatch()
    let history = useHistory()
    const updateUser = useSelector(state => state.updateUser)

    const goToHome = () => {
        !updateUser.user ? history.push(`/welcome`) : history.push(`/${updateUser.user.username}`) 
    }
    return (
        <div onClick={goToHome}>
            <img className="orbit" src="/media/orbit-home.png" alt="Home" onClick={goToHome}/>
        </div>
            
    )
}

export default OrbitHomeButton
