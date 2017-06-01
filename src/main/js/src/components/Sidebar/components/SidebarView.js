import React from 'react'
import './SidebarView.css'
import MetisMenu from 'react-metismenu';

const content=[
  {
    icon: 'dashboard',
    label: 'dashboard',
    to: 'menu-1',
  },
  {
    icon: 'bell',
    label: 'Menu 2',
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
    <MetisMenu content={content} activeLinkFromLocation /> 
    
)

export default SidebarView