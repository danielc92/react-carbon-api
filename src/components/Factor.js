import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class Factor extends Component {

  getData = () => {
    let labelData = [];
    let valueData = [];

    this.props.intensity_factors.map(object=>{
      Object.entries(object).map(item=>{
        if (item[1] > 0) {
          labelData.push(item[0]);
          valueData.push(item[1]);
        }
        
      })
    })

    let data = {
        labels: labelData,
        datasets:[
            {
                label: 'Intensity (units)',
                data: valueData,
                backgroundColor: 'rgba(88, 211, 144,0.8)'
            }
        ]
    }
    return data;
}

    render() {
        return (
           <React.Fragment>

            <section className="content">
              <section className="columns">
                <section className="column is-three-quarters">
                <Bar data={this.getData} 
                        options={
                            {
                             responsive: true,
                             title: {
                                 display: true,
                                 text: 'Intensity Factors Chart'
                             },
                             maintainAspectRatio: true, 
                             scales: {
                                xAxes: [{   
                                  gridLines: {
                                      display: false
                                  }
                                 }],
                                 yAxes: [
                                     {ticks:{
                                                beginAtZero: true,
                                                stepSize: 200
                                            },
                                            gridLines: {
                                                color: 'rgba(0,0,0,0.05)'
    
                                            }
                                    }]
                   }}}/>
                </section>
                <section className="column is-one-quarter">
                <h3>Intensity Factors</h3>
                <p className="customcode help">Data available via the /intensity/factors route. Data with 0 value has been omitted.</p>
            <hr></hr>
              {this.props.intensity_factors.map(item => {
                return <table className="table is-striped">
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.entries(item).map(entry => { 
                    if (entry[1] > 0) {
                        return (
                          <tr>
                          <td>{entry[0]}</td>
                          <td className="customcode">{entry[1]}</td>
                        </tr>) }
                    
                  })}
                  </tbody>
                </table>
          
              })}
                </section>
              </section>
            
              </section>
           </React.Fragment>
        )
    }
}
