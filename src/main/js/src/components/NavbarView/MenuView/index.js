import React from 'react'
import MessageView from './MessageView'
import NotificationsView from './NotificationsView'

import './style.scss'

const MenuView = () => (
    <ul className="menu-lists">
        <li><MessageView/></li>
        <li><NotificationsView/></li>
    </ul>
)

export default MenuView