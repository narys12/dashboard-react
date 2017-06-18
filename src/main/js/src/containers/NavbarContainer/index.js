import { connect } from 'react-redux';

import NavbarView from '../../components/NavbarView'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility
    }
}

const NavbarContainer = connect(mapStateToProps)(NavbarView)

export default NavbarContainer;