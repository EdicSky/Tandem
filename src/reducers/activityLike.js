const ActivityLike = (state = 0, action) => {
    switch (action.type) {
        case 'ACTIVITY_LIKE':
            return state + 1
        default:
            return state
    }
}

export default ActivityLike
