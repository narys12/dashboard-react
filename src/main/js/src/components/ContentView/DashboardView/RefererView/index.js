import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

import './style.scss'

class RefererView extends Component {
    render() {

        const data = {
            labels: [
                'Google',
                'Facebook',
                'Twitter'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                responsive: true,
            }]
        };

        return (
            <div id="referer">
                <h2>Referer</h2>
                <Doughnut data={data} />
            </div>
        );
    }
}

export default RefererView;