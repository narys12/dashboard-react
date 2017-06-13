import React from 'react'
import MenuView from './MenuView'
import SearchView from './SearchView'

import './style.scss'

class NavbarView extends React.Component {
    render() {
        return (
            <nav className={this.getMenuclass()}>
                <SearchView />
                <MenuView />
            </nav>
        )
    }

    getMenuclass() {
        const isSidebarVisible = this.props.sidebarVisibility.value
        let menuClass = "navbar-menu"
        if (!isSidebarVisible) {
            menuClass += " large-menu"
        } else {
            menuClass = menuClass.replace(" large-menu", "")
        }
        return menuClass
    }
}

export default NavbarView