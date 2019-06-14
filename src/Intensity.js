import React, { Component } from 'react'

export default class Intensity extends Component {
    render() {
        return (
           <React.Fragment>
                <h5>Intensity (/intensity)</h5>
            <hr></hr>
            {this.state.intensity.map(item => {return(
              <React.Fragment>
              <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Date (from)</td>
                <td>{item['from']}</td>
              </tr>
              <tr>
                <td>Date (to)</td>
                <td>{item['to']}</td>
              </tr>
              {Object.entries(item['intensity']).map(entry => {
                return (
                  <React.Fragment>
                    <tr>
                      <td>{entry[0]}</td>
                      <td>{entry[1]}</td>
                    </tr>
                  </React.Fragment>
                  )
              })}
              </tbody>
              </table>

              </React.Fragment>)
            })
            }


           </React.Fragment>
        )
    }
}
