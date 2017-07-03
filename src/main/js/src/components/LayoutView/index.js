import React from 'react';
import SidebarContainer from '../../containers/SidebarContainer'
import NavbarContainer from '../../containers/NavbarContainer'

import 'font-awesome/css/font-awesome.css'

import './style.scss'

class LayoutView extends React.Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <NavbarContainer />
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
} 

export default LayoutView;
