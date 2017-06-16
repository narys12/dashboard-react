import {CHANGE_SUBMENU_VISIBILITY} from '../actions/navbarActions'

const initialState = {
    value: false
}

export function subMenuVisibility(state = {}, action){
    switch (action.type) {
        case CHANGE_SUBMENU_VISIBILITY:
            return Object.assign(
                {},
                state,
                {value: action.payload}
            )
        default:
            return initialState
    }
}