
const entryReducer = (prevState=initialState, action) => {
    switch (action.type) {
        case 'NEW ENTRY':
            return {...prevState, user: {
                ...user, entries: [...entries, action.payload.entry]}}
            default:
                return prevState
    }
}