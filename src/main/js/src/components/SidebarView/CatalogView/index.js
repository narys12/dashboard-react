import React, { Component } from 'react';

class CatalogView extends Component {
    render() {
        return (
            <span>
                Catalog
                <ul className={this.props.isParentClicked ? "display-submenu" : "hide-submenu"}>
                    <li>Products</li>
                </ul>
            </span>
        );
    }
}

export default CatalogView;