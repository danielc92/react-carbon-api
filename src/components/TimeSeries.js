import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';


export default class TimeSeries extends Component {

    getData = () => {
        let forecastedData = [];
        let actualData = [];
        let labels = [];
        
    }

    render() {
        return (
            <section className="content">
                
                <section className="columns">
                    <section className="column is-one-quarter">
                    <h3>Generation Mix</h3>
                <p className="customcode help">Data available via the /generation route. Data with 0 value has been omitted.</p>
                <hr></hr>
                        <table className="table is-striped">
                            <thead>
                                <tr>
                                    <th>Fuel</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.generation.map(item => {
                                    if (item['perc'] > 0) {
                                    return (
                                        <tr key={item['fuel']}>
                                            <td>{item['fuel']}</td>
                                            <td className="customcode">{item['perc']}</td>
                                        </tr>
                                    )}
                                })}
                            </tbody>
                        </table>
                    </section>
                    <section className="column is-three-quarters">
                       <Line data={this.getData} 
                            options={
                                {
                                 title: {
                                     display: true,
                                     text: 'Generation Mix Chart'
                                 },
                                 maintainAspectRatio: true, 
                                 scales: {
                                     yAxes: [
                                         {ticks:{
                                                    beginAtZero: true,
                                                    stepSize: 15
                                                }
                                        }]
                       }}}/>
                    </section>
                </section>
            </section>
            )
    }
}
