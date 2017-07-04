import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import './style.scss'

class VisitChartView extends Component {
    render() {

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            options: {
                responsive: true,
                maintainAspectRatio: true
            },
            datasets: [
                {
                label: 'Visits',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                responsive: true,
                data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        return (
            <div id="visit-chart">
                <Line data={data} height={100} width={400}/>
            </div>
        );
    }
}

export default VisitChartView;