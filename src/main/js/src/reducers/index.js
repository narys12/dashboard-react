import { combineReducers } from 'redux'
import {sidebarVisibility} from './sidebar'

const dashboard = combineReducers({
    sidebarVisibility,
})

export default dashboard