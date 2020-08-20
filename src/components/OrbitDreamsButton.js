import React from 'react'
import { useHistory } from "react-router-dom"

const OrbitDreamsButton = () => {
    let history = useHistory()

    const goToDreamIndex = () => {
        history.push(`/dreams`)
    }

    return (
        <div onClick={goToDreamIndex}>
            <img className="orbit" src="/media/orbit-dreams.png" alt="Dreams" onClick={goToDreamIndex}/>
        </div>
    )
}

export default OrbitDreamsButton
