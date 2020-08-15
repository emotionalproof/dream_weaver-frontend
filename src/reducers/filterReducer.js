const initialState = {search:[], date: null, sortDateAscending: true }

const filterReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            return {
                ...prevState, 
                search: action.payload.search
            }
        case "DATE":
            return {...prevState, date: action.payload.date}
        case "SORT DATE ASCENDING":
            return {...prevState, sortDateAscending: action.payload.sortDateAscending}
        default:
            return prevState
    }
}

export default filterReducer