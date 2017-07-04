import React, { Component } from 'react';
import VisitChartView from './VisitChartView'
import RefererView from './RefererView'

import './style.scss'

class DashboardView extends Component {

    render() {
        return (
            <div id="top">
                <VisitChartView />
                <RefererView />
            </div>
        );
    }
}

export default DashboardView;