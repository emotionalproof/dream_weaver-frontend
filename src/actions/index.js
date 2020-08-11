// export const increment = num = {
//     return {
//         type: 'INCREMENT',
//         payload: num
//     }
// }


export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: {user}
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