import React from 'react'
import SidebarView from '../components/SidebarView'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        visibility: state.sidebarVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeVisibility: (bool) => {
            //return changeVisibility(bool)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView)