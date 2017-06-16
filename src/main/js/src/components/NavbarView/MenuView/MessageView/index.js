import React from 'react'
import UnreadMessagesView from './UnreadMessagesView'

class MessageView extends React.Component {

    render() {
        return (
            <li className="main-menu-item">
                <i className="fa fa-envelope"></i>
                <div className="badge-notify">2</div>
                <UnreadMessagesView />
            </li>
        )
    }
}

export default MessageView