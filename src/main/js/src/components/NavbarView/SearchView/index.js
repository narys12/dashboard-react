import React from 'react'

import './style.scss'

class SearchView extends React.Component {
    render() {
        return (
            <div className="search-wrapper">
                <i className="fa fa-search"></i>
                <input type="text" name="" placeholder="Search..." />
            </div>
        )
    }
}

export default SearchView