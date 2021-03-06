

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

export const updateEntry = (entry) => {
    return {
        type: "UPDATE ENTRY",
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

export const changeDate = (newDate) => {
    return {
        type: "CHANGE DATE",
        payload: newDate
    }
}

export const searchDescription = (searchArray) => {
    return {
        type: "SEARCH DESCRIPTION",
        payload: searchArray
    }
}

export const sortDateAscending = () => {
    return {
        type: "SORT DATE ASCENDING"
    }
}

export const resetDate = () => {
    return {
        type: "RESET DATE"
    }
}

export const newSymbol = (symbol) => {
    return {
        type: "NEW SYMBOL",
        payload: symbol
    }
}