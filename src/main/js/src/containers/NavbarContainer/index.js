import { connect } from 'react-redux';

import SidebarView from '../../components/SidebarView'
import {changeNavbarVisibility} from '../../actions/navbarActions'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility,
        subMenuVisibility: state.subMenuVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeSubMenuVisibility: (bool) => {
            dispatch(changeNavbarVisibility(bool))
        }
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarView)

export default NavbarContainer;