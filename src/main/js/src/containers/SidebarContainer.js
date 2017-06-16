import { connect } from 'react-redux';

import SidebarView from '../components/SidebarView'
import {changeSidebarVisibility} from '../actions/sidebarActions'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeSidebarVisibility: (bool) => {
            dispatch(changeSidebarVisibility(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView)