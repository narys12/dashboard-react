import React from 'react'
import MenuView from './MenuView'
import SearchView from './SearchView'

import './style.scss'

class NavbarView extends React.Component {
    render() {
        return (
            <nav className="navbar-menu">
                <SearchView/>
                <MenuView/>
            </nav>
        )
    }
}

export default NavbarView