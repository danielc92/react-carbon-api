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
      <div>
          <h1>Hello World</h1>  
      </div>
    )
  }
}

