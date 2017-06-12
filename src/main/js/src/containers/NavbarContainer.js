import { connect } from 'react-redux';

import NavbarView from '../components/NavbarView'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility
    }
}

export default connect(mapStateToProps)(NavbarView)