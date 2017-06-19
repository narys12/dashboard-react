import React from 'react'

import CatalogView from './CatalogView'

import './style.scss'

class SidebarView extends React.Component {

    constructor(props) {
        super(props)
        this.openSidebar = () => this.props.changeSidebarVisibility(true)
        this.closeSidebar = () => this.props.changeSidebarVisibility(false)
        this.state = {
            isCatalogClicked: false
        }
    }

    render() {
        let isOpen = this.props.sidebarVisibility.value
        return (
            <div className={isOpen ? "sidebar-wrapper" : "sidebar-wrapper toggle-menu"}>
                <i 
                    className={isOpen ? "fa fa-close fa-lg" : "fa fa-bars fa-lg"}
                    onClick={isOpen ? this.closeSidebar : this.openSidebar}
                ></i>
                <div className="sidebar-header">
                    Your Site
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item"><i className="fa fa-dashboard"></i><span>Dashboard</span></li>
                    <li className="sidebar-menu-item" 
                        onClick={() => this.setState((prevState) => ({isCatalogClicked: !prevState.isCatalogClicked}))}
                    >
                        <i className="fa fa-user"></i><CatalogView isParentClicked={this.state.isCatalogClicked}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SidebarView