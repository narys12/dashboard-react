import React from 'react';
import SidebarContainer from '../../containers/SidebarContainer'
import NavbarContainer from '../../containers/NavbarContainer'
import ContentContainer from '../../containers/ContentContainer'

import 'font-awesome/css/font-awesome.css'

import './style.scss'

class LayoutView extends React.Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <NavbarContainer />
        <ContentContainer children={this.props.children}/>
      </div>
    )
  }
} 

export default LayoutView;
