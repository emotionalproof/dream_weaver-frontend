// export const increment = num = {
//     return {
//         type: 'INCREMENT',
//         payload: num
//     }
// }


export const loginUser = (user) => {
    return {
        type: 'LOGIN',
        payload: {user}
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
}

export const newEntry = (entry) => {
    return {
        type: 'NEW ENTRY',
        payload: {entry}
    }
}

export const changeLoginFormUsername = (text) => {
    return {
        type: 'CHANGE LOGIN FORM USERNAME',
        payload: text
    }
}

export const changeLoginFormPassword = (text) => {
    return {
        type: 'CHANGE LOGIN FORM PASSWORD',
        payload: text
    }
}