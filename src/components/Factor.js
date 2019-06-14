import React, { Component } from 'react'
import svg_source from '../images/undraw_metrics_gtu7.svg';

export default class Factor extends Component {
    render() {
        return (
           <React.Fragment>

            <section className="content">
              <section className="columns  is-vcentered">
                <section className="column">
                <img src={svg_source} alt=""/>
                </section>
                <section className="column">
                <h5>Intensity Factors</h5>
                <p className="customcode">Data available via the /intensity/factors route</p>
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
                      <td>{entry[1]}</td>
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
