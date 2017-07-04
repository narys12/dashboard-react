import React from 'react'
import onClickOutside from 'react-onclickoutside'
import {Link} from 'react-router'

import './style.scss'

class SidebarView extends React.Component {

    constructor(props) {
        super(props)
        this.openSidebar = () => this
            .props
            .changeSidebarVisibility(true)
        this.closeSidebar = () => this
            .props
            .changeSidebarVisibility(false)
        this.state = {
            isCatalogClicked: false
        }
    }

    render() {
        let isOpen = this.props.sidebarVisibility.value
        return (
            <div
                className={isOpen
                ? "sidebar-wrapper"
                : "sidebar-wrapper toggle-menu"}>
                <i
                    className={isOpen
                    ? "fa fa-close fa-lg"
                    : "fa fa-bars fa-lg"}
                    onClick={isOpen
                    ? this.closeSidebar
                    : this.openSidebar}></i>
                <div className="sidebar-header">
                    Your Site
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <Link to="dashboard"><i className="fa fa-home"></i><span>Dashboard</span></Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="products"><i className="fa fa-user"></i><span>Products</span></Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="offers"><i className="fa fa-user"></i><span>Offers</span></Link>
                    </li>
                </ul>
            </div>
        );
    }

    handleClickOutside = evt => {
        this.closeSidebar()
    }
}

export default onClickOutside(SidebarView)