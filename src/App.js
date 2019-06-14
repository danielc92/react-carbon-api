import React, { Component } from 'react'
import axios from 'axios';


const url = 'https://api.carbonintensity.org.uk/intensity';
const url2 ='https://api.carbonintensity.org.uk/intensity/factors';

export default class App extends Component {

  state = {
    intensity: [],
    intensity_factors: []
  }

  componentDidMount() {
    axios.get(url)
    .then(
      response => {
        console.log('Intensity');
        console.log(response.data);
        this.setState({intensity: response.data.data});
      }
    )
    
    axios.get(url2)
    .then(
      response => {
        console.log('Factors');
        console.log(response.data);
        this.setState({intensity_factors: response.data.data});
      }
    )
  }

  render() {

    return (
      <section className="section">
        <section className="container">
            <h2>Carbon Intensity (National, United Kingdom)</h2>
            <hr></hr>

            <h3>Summary</h3>
            <hr></hr>
            <p>National Grid’s Carbon Intensity API provides an indicative trend of regional carbon intensity of the electricity system in Great Britain (GB) up to 2 days ahead of real-time. It provides programmatic and timely access to both forecast and estimated carbon intensity data. The Carbon Intensity forecast includes CO2 emissions related to electricity generation only. The includes emissions from all large metered power stations, interconnector imports, transmission and distribution losses, and accounts for national electricity demand, embedded wind and solar generation.</p>
              
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
          </section>
        </section>
      </section>
    )
  }
}

