import React from 'react'
import Searchform from '../SearchForm'
import Menu from '../Menu'

const NavbarView = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <Searchform />
            <Menu />
        </div>
    </nav>
)

export default NavbarView