import React from 'react'
import './SidebarView.css'
import MetisMenu from 'react-metismenu';

const content=[
  {
    icon: 'dashboard',
    label: 'Menu 1',
    to: 'menu-1',
  },
  {
    icon: 'user',
    label: 'Profile',
    to: 'menu-2',
  },
  {
    icon: 'bolt',
    label: 'Menu 3',
    content: [
      {
        icon: 'bolt',
        label: 'Sub Menu',
        to: 'sub-menu',
      },
    ],
  },
];

const SidebarView = () => (
    <div className="sidebar-wrapper">
        <MetisMenu content={content} activeLinkFromLocation /> 
    </div>
)

export default SidebarView