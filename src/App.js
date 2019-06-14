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
        this.setState({intensity: response.data});
      }
    )
    
    axios.get(url2)
    .then(
      response => {
        console.log('Factors');
        console.log(response.data);
        this.setState({intensity_factors: response.data});
      }
    )
  }

  render() {

    return (
      <section className="section">
        <section className="container">
        <section className="content">
          <h3>Carbon Intensity UK</h3>

        </section>

        </section>

      </section>
    )
  }
}

