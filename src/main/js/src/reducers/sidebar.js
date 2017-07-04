import {CHANGE_SIDEBAR_VISIBILITY} from '../actions/sidebarActions'

const initialState = {
    value: false
}

export function sidebarVisibility(state = {}, action){
    switch (action.type) {
        case CHANGE_SIDEBAR_VISIBILITY:
            return Object.assign(
                {},
                state,
                {value: action.payload}
            )
        default:
            return initialState
    }
}