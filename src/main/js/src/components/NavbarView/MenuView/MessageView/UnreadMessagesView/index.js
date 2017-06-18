import React from 'react'

class UnreadMessagesView extends React.Component {
    render() {

        return (
            <ul className={this.getListClass()}>
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

    getListClass(){
        let isMainMenuActive = this.props.isActive
        let listClass = "sub-menus"
        if (isMainMenuActive)
            listClass += " show"
        else listClass = listClass.replace(" show", "")
        return listClass
    }
}

export default UnreadMessagesView