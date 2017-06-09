import React, {Component} from 'react'
import './SidebarView.scss'

class SidebarView extends React.Component {

    constructor(props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.state = {
            sideBarWrapper: "sidebar-wrapper"
        }
    }

    render() {
        const isClosed = this.props.visibility.value;
        let icon = null;
        if (isClosed) {
            icon = <i className="fa fa-bars fa-lg" onClick={this.openMenu}></i>
        } else {
            icon = <i className="fa fa-close fa-lg" onClick={this.closeMenu}></i>
        }

        return (
            <div className={this.state.sideBarWrapper}>
                {icon}
                <div className="sidebar-header">
                    Your Site
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item"><i className="fa fa-dashboard"></i><span>Dashboard</span></li>
                    <li className="sidebar-menu-item"><i className="fa fa-user"></i><span>Profile</span></li>
                </ul>
            </div>
        );
    }

    openMenu() {
        this.setState((prevState) => ({
            isClosed: false,
            sideBarWrapper: prevState.sideBarWrapper.replace(" toggle-menu", "")
        }))
    }

    closeMenu() {
        this.setState((prevState) => ({
            isClosed: true, 
            sideBarWrapper: prevState.sideBarWrapper + " toggle-menu"
        }))
    }
}

export default SidebarView