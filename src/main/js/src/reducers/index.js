import { combineReducers } from 'redux'
import {sidebarVisibility} from './sidebar'
import {subMenuVisibility} from './navbar'

const dashboard = combineReducers({
    sidebarVisibility,
    subMenuVisibility
})

export default dashboard