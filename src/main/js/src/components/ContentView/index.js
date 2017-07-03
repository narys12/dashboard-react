import React, { Component } from 'react';

import './style.scss'

class ContentView extends Component {
    render() {
        const isSidebarVisible = this.props.sidebarVisibility.value
        return (
            <div className={isSidebarVisible ? 
                "content" : 
                "content full"}>
                {this.props.children}
            </div>
        );
    }
}

export default ContentView;