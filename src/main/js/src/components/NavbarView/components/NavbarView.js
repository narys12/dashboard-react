import React from 'react'
import Menu from '../Menu'
import SearchView from '../SearchView'

import './NavbarView.scss'

class NavbarView extends React.Component {
    render() {
        return (
            <nav className={this.getMenuclass()}>
                <SearchView />
                <Menu />
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