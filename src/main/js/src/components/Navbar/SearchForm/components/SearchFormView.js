import React from 'react'
import './SearchFormView.css'

const SearchFormView = () => (
    <form className="navbar-form navbar-left">
        <div className="input-group">
            <input className="form-control search-form" type="text" placeholder="Search" />
            <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                    <i className="fa fa-search nav-search-icon" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </form>
)

export default SearchFormView