import React, { Component } from 'react'
import axios from 'axios';
import Factor from './Factor';
import Intensity from './Intensity';
import Summary from './Summary';


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
            <Summary/>
            <Intensity intensity={this.state.intensity}/>
            <Factor intensity_factors={this.state.intensity_factors}/>
          </section>
        </section>
    )
  }
}

