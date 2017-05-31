import React from 'react'
import Messsage from '../Message'
import Notifications from '../Notifications'

import './MenuView.css'

const MenuView = () => (
    <ul className="nav navbar-nav navbar-right">
        <Messsage/>
        <Notifications/>
    </ul>
)

export default MenuView