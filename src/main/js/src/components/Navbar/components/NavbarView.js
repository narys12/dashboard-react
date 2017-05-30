import React from 'react'
import Searchform from '../SearchForm'
import Menu from '../Menu'

const NavbarView = () => (
    <nav className="navbar navbar-default">
        <Searchform />
        <Menu />
    </nav>
)

export default NavbarView