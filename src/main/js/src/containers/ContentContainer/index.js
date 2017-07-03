import { connect } from 'react-redux';

import ContentView from '../../components/ContentView'

function mapStateToProps(state) {
    return {
        sidebarVisibility: state.sidebarVisibility
    }
}

const ContentContainer = connect(mapStateToProps)(ContentView)

export default ContentContainer;