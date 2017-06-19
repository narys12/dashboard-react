import React from 'react'
import onClickOutside from 'react-onclickoutside'
import UnreadMessagesView from './UnreadMessagesView'

class MessageView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isMainMenuActive: false
        }
    }

    render() {
        return (
            <li className="main-menu-item" onClick={this.showSubMenu.bind(this)} >
                <i className="fa fa-envelope"></i>
                <div className="badge-notify">2</div>
                <UnreadMessagesView isMainMenuActive={this.state.isMainMenuActive}/>
            </li>
        )
    }

    handleClickOutside = evt => {
        this.setState((prevState) => ({
            isMainMenuActive: false
        }))
    }

    showSubMenu() {
        this.setState((prevState) => ({
            isMainMenuActive: !prevState.isMainMenuActive
        }))
    }
}

export default onClickOutside(MessageView)