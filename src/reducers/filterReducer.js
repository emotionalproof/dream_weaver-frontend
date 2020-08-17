const initialState = {search:[], newDate: "", sortDateAscending: true }

const filterReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case "SEARCH DESCRIPTION":
            return {
                ...prevState, 
                search: action.payload.search
            }
        case "CHANGE DATE":
            return {
                ...prevState, 
                newDate: action.payload.newDate
            }
        case "SORT DATE ASCENDING":
            return {
                ...prevState, 
                sortDateAscending: action.payload.sortDateAscending
            }
        case "RESET DATE":
            return prevState
        default:
            return prevState
    }
}

export default filterReducer