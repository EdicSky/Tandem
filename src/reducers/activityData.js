const getDataFromServer = (state = [], action) => {
    switch (action.type) {
        case 'ACTIVITY_DATA':
            return action.value
        default:
            return state
    }
}

export default getDataFromServer
