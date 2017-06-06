import React, {Component} from 'react'
import './SidebarView.scss'

class SidebarView extends React.Component {

    constructor(props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.state = {
            isClosed: false
        }
    }

    render() {

        const isClosed = this.state.isClosed;
        let icon = null;
        if (isClosed) {
            icon = <i className="fa fa-bars fa-lg" onClick={this.openMenu}></i>
        } else {
            icon = <i className="fa fa-close fa-lg" onClick={this.closeMenu}></i>
        }

        return (
            <div className="sidebar-wrapper">
                {icon}
                <div className="sidebar-header">
                    Your Site
                </div>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item"><i className="fa fa-dashboard"></i>Dashboard</li>
                    <li className="sidebar-menu-item"><i className="fa fa-user"></i>Profile</li>
                </ul>
            </div>
        );
    }

    openMenu() {
        this.setState({isClosed: false})
    }

    closeMenu() {
        this.setState({isClosed: true})

    }
}

export default SidebarView