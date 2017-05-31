import React from 'react'
import Messsage from '../Message'
import Notifications from '../Notifications'

import './MenuView.css'

const MenuView = () => (
    <ul className="nav navbar-nav navbar-right">
        <li><Messsage /></li>
        <li><Notifications /></li>
    </ul>
    
)

export default MenuView