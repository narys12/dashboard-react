import React from 'react';
import SidebarContainer from '../../containers/SidebarContainer'
import NavbarContainer from '../../containers/NavbarContainer'
import ContentView from '../ContentView'

import 'font-awesome/css/font-awesome.css'

import './style.scss'

class LayoutView extends React.Component {
  render() {
    const isSideBarVisible = this.props.sidebarVisibility.value;
    return (
      <div>
        <SidebarContainer />
        <div className={!isSideBarVisible ? "" : "disable"}>
          <NavbarContainer path={this.props.location.pathname}/>
          <ContentView children={this.props.children}/>
        </div>
      </div>
    )
  }
} 

export default LayoutView;
