import React from 'react';
import SidebarContainer from '../../../containers/SidebarContainer'
import NavbarContainer from '../../../containers/NavbarContainer'

import 'font-awesome/css/font-awesome.css'

import './LayoutView.scss'

const LayoutView = () => (
  <div>
    <SidebarContainer />
    <NavbarContainer />
  </div>
)

export default LayoutView;
