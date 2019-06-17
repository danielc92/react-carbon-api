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
                    backgroundColor: 'rgba(88, 211, 144,0.8)'
                }
            ]
        }

        return data;
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
                   <Bar data={this.getData} 
                        options={
                            {
                             title: {
                                 display: true,
                                 text: 'Generation Mix Chart'
                             },
                             maintainAspectRatio: true, 
                             scales: {
                                 xAxes: [{
                                    
                                    gridLines: {
                                        display: false
                                    }}]
                                ,
                                 yAxes: [
                                     {
                                         ticks:{
                                                beginAtZero: true,
                                                stepSize: 15
                                            },
                                            gridLines: {
                                                color: 'rgba(0,0,0,0.05)'
    
                                            }
                                    }]
                   }}}/>
                </section>
            </section>
        </section>
        )
    }
}
