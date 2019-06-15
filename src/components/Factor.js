import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class Factor extends Component {

  getData = () => {
    let labelData = Object.keys(this.props.intensity_factors);
    let valueData = Object.values(this.props.intensity_factors);

    this.props.intensity_factors.map(item=>{
      Object.entries(item).map(item=>{
        console.log('proccessing', item[0])
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
                label: 'Percentage (%)',
                data: valueData,
                backgroundColor: 'rgba(51,153,102,0.7)'
            }
        ]
    }
    console.log(data);
    return data;
}

    render() {
        return (
           <React.Fragment>

            <section className="content">
              <section className="columns  is-vcentered">
                <section className="column is-three-quarters">
                <Bar data={this.getData} 
                        options={
                            {
                             responsive: true,
                             title: {
                                 display: true,
                                 text: 'Generation Mix Chart'
                             },
                             maintainAspectRatio: true, 
                             scales: {
                                 yAxes: [
                                     {ticks:{
                                                beginAtZero: true,
                                                stepSize: 200
                                            }
                                    }]
                   }}}/>
                </section>
                <section className="column is-one-quarter">
                <h3>Intensity Factors</h3>
                <p className="customcode help">Data available via the /intensity/factors route</p>
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
                    return(
                      <tr>
                      <td>{entry[0]}</td>
                      <td className="customcode">{entry[1]}</td>
                    </tr>
                      )
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
