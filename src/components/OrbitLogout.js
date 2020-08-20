import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../actions'

const OrbitLogout = () => {
    let history = useHistory()
    let dispatch = useDispatch()

    const updateUser = useSelector(state => state.updateUser)


    const handleLogout = () => {
        localStorage.removeItem("user_id")
        dispatch(logoutUser())
        history.push(`/welcome`)
    }

    return (
        <div onClick={handleLogout}>
            <img className="orbit" src="/media/orbit-logout.png" alt="Logout" onClick={handleLogout}/>
        </div>
    )
}

export default OrbitLogout
