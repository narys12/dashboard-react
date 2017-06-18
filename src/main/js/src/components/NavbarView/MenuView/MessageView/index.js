import React from 'react'
import UnreadMessagesView from './UnreadMessagesView'

class MessageView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    render() {
        return (
            <li className="main-menu-item" onClick={this.showSubMenu.bind(this)} >
                <i className="fa fa-envelope"></i>
                <div className="badge-notify">2</div>
                <UnreadMessagesView isActive={this.state.isActive}/>
            </li>
        )
    }

    showSubMenu() {
        this.setState((prevState) => ({
            isActive: !prevState.isActive
        }))
    }
}

export default MessageView