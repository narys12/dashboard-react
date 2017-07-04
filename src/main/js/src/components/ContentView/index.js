import React, {Component} from 'react';

import './style.scss'

class ContentView extends Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}

export default ContentView;