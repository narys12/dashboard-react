import React from 'react'
import Messsage from '../Message'
import Notifications from '../Notifications'

import './MenuView.scss'

const MenuView = () => (
        <ul className="menu-lists">
            <li><Messsage/></li>
            <li><Notifications/></li>
        </ul>
)

export default MenuView