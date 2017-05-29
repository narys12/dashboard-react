import React from 'react'
import Searchform from './SearchForm'
import Menu from './Menu'

const NavbarView = () => (
    <nav className="navbar">
        <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>
        <Searchform />
        <Menu />
    </nav>
)

export default NavbarView