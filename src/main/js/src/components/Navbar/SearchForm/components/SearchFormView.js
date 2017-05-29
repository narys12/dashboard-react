import React from 'react'
import './SearchFormView.scss'

const SearchFormView = () => (
    <form className="form-search">
        <span className="input-icon">
            <input className="nav-search-input" type="text" placeholder="Search" />
            <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
        </span>
    </form>
)

export default SearchFormView