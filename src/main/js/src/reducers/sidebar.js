const initialState = {
    visibility: true
}

export function sidebarVisibility(state = {}, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'SET_VISIBILITY' : 
            return Object.assign({}, state, {
                visibility: action.value
            })
        default: 
            return state
    }
}