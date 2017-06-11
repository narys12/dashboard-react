import SidebarView from '../components/SidebarView'
import { connect } from 'react-redux';
import {changeVisibility} from '../actions/sidebarActions'

function mapStateToProps(state) {
    return {
        visibility: state.sidebarVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeVisibility: (bool) => {
            dispatch(changeVisibility(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView)