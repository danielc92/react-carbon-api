import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


export default class Generation extends Component {
    
    getData = () => {
        let labelData = [];
        let valueData = [];

        this.props.generation.map( item => {
            if (item['perc'] > 0) {
                labelData.push(item['fuel']);
                valueData.push(item['perc'])
            }
            
        })

        let data = {
            labels: labelData,
            datasets:[
                {
                    label: 'Percentage (%)',
                    data: valueData,
                    backgroundColor: 'rgba(51,153,102,0.7)'
                }
            ]
        }

        return data;
    }

    render() {
        return (
        <section className="content">
            <h3>Generation Mix</h3>
            <p className="customcode help">Data available via the /generation route</p>
            <section className="columns">
                <section className="column is-one-quarter">
                    {this.getData}
                    <table className="table is-striped">
                        <thead>
                            <tr>
                                <th>Fuel</th>
                                <th>Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.generation.map(item => {
                                return (
                                    <tr key={item['fuel']}>
                                        <td>{item['fuel']}</td>
                                        <td className="customcode">{item['perc']}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
                <section className="column is-three-quarters">
                   <Bar data={this.getData} 
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
