import React, { Component } from 'react'

export default class Factor extends Component {
    render() {
        return (
           <React.Fragment>
            <h5>Intensity Factors (/intensity/factors)</h5>
            <hr></hr>
            <section className="columns is-multiline">
              {this.state.intensity_factors.map(item => {
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
           </React.Fragment>
        )
    }
}
