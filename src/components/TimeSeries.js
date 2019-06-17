import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


export default class TimeSeries extends Component {

    getData = () => {
        let forecastedData = [];
        let actualData = [];
        let labels = [];

        this.props.timeseries.map( item => {
            labels.push(item['from']);
            actualData.push(item['intensity']['forecast']);
            forecastedData.push(item['intensity']['actual']);
        })

        let data = {
            labels: labels,
            datasets:[
                {
                    label: 'Actual',
                    data: actualData,
                    borderColor: 'rgba(88, 211, 144,0.8)',
                    backgroundColor: 'rgba(88, 211, 144,0.8)',
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Forecast',
                    data: forecastedData,
                    borderColor: 'rgba(147, 35, 153,0.8)', //line colour
                    backgroundColor: 'rgba(147, 35, 153,0.8)',
                    pointRadius: 0,
                    fill: false
                },
            ]
        }

        return data;

    }

    render() {
        return (
            <section className="content">
                
                <section className="columns">
                    
                    <section className="column is-three-quarters">
                       <Line data={this.getData} 
                            options={
                                {
                                 title: {
                                     display: true,
                                     text: 'Time Series Chart'
                                 },
                                 maintainAspectRatio: true, 
                                 scales: {
                                     yAxes: [
                                         {ticks:{
                                                    beginAtZero: true,
                                                    stepSize: 50
                                                },
                                        gridLines: {
                                            color: 'rgba(0,0,0,0.05)'

                                        }
                                        }],
                                    xAxes: [
                                        {ticks:{
                                                maxTicksLimit: 10
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                    ]
                       }}}/>
                    </section>

                    <section className="column is-one-quarter">
                    <h3>Intensity Time Series</h3>
                    <p className="customcode help">Data available via the /intensity/fromDate/toDate/ route.</p>
                    <hr></hr>
                    <p>The following data backtracks approximately 5 days, and includes forecasts and actual figures.</p>
                    
                    </section>
                </section>
            </section>
            )
    }
}
