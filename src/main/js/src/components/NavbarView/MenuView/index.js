import React from 'react'
import MessageView from './MessageView'
import NotificationsView from './NotificationsView'

import './style.scss'

const MenuView = () => (
    <ul className="menu-lists">
        <MessageView/>
        <NotificationsView/>
    </ul>
)

export default MenuView