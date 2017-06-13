import React from 'react'
import UnreadMessagesView from './UnreadMessagesView'
import './style.scss'

class MessageView extends React.Component {

    render() {
        return (
            <a href="#">
                <i className="fa fa-envelope"></i>
                <div className="badge-notify">1</div>
                <ul className="sub-menus">
                    <UnreadMessagesView />
                </ul>
            </a>
        )
    }
}

export default MessageView