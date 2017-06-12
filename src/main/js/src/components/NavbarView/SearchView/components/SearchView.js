import React from 'react'

import './SearchView.scss'

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