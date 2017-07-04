import { connect } from 'react-redux';

import LayoutView from '../../components/LayoutView'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility
    }
}

const LayoutContainer = connect(mapStateToProps)(LayoutView)

export default LayoutContainer;