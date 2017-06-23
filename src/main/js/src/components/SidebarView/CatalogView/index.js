import React, {Component} from 'react';

class CatalogView extends Component {
    render() {
        return (
            <ul
                className={this.props.isParentClicked
                ? "display-submenu"
                : "hide-submenu"}>
                <li>Products</li>
                <li>Categories</li>
            </ul>
        );
    }
}

export default CatalogView;