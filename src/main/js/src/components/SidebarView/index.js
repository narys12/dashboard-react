import React from 'react'
import './style.scss'

class SidebarView extends React.Component {

    render() {
        const isOpen = this.props.sidebarVisibility.value
        const openSidebar = () => this.props.changeSidebarVisibility(true)
        const closeSidebar = () => this.props.changeSidebarVisibility(false)
        let sideBarWrapper = "sidebar-wrapper"
        let icon = null;
        if (!isOpen) {
            sideBarWrapper = sideBarWrapper + " toggle-menu"
            icon = <i className="fa fa-bars fa-lg" onClick={openSidebar}></i>
        } else {
            sideBarWrapper = sideBarWrapper.replace(" toggle-menu", "")
            icon = <i className="fa fa-close fa-lg" onClick={closeSidebar}></i>
        }

        return (
            <div className={sideBarWrapper}>
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
}

export default SidebarView