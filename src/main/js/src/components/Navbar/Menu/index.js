import React from 'react'
import Messsage from './Message'
import Notifications from './Notifications'
import MetisMenu from 'react-metismenu';

const Menu = () => (
    <div>
        <MetisMenu content={ menu }/>
    </div>
    
)

const menu = [
  {
    icon: 'dashboard',
    label: 'Menu 1',
    to: 'notifications',
  },
  {
    icon: 'bell',
    label: 'Menu 2',
    to: 'messsage',
  },
];


export default Menu