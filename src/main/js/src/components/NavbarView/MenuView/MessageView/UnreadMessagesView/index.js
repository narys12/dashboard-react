import React from 'react'

class UnreadMessagesView extends React.Component {
    render() {
        return (
            <ul className={this.props.isMainMenuActive ? "sub-menus show" : "sub-menus"}>
                <li className="sub-menu-item">
                    <h3 className="user-name">Naris</h3>
                    <q className="message">Hello World</q>
                </li>
                <li className="sub-menu-item">
                    <h3 className="user-name">Ol Kaf</h3>
                    <q className="message">Blabla tsisy thème</q>
                </li>
            </ul>
        )
    }
}

export default UnreadMessagesView