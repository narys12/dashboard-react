import React from 'react'
import MenuView from './MenuView'
import SearchView from './SearchView'

import './style.scss'

class NavbarView extends React.Component {
    render() {
        const isSidebarVisible = this.props.sidebarVisibility.value
        return (
            <nav
                className={isSidebarVisible
                ? "navbar-menu"
                : "navbar-menu large-menu"}>
                <SearchView/>
                <MenuView/>
            </nav>
        )
    }
}

export default NavbarView