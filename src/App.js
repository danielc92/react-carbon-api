import React, { Component } from 'react'
import axios from 'axios';
import Factor from './components/Factor';
import Intensity from './components/Intensity';
import Summary from './components/Summary';
import Generation from './components/Generation';
import Footer from './components/Footer';
import Comparison from './components/Comparison';
import License from './components/License';
import TimeSeries from './components/TimeSeries';
import Introduction from './components/Introduction';

let toJsonDate;
let fromJsonDate;
// The offset in milliseconds for 5 days
const milliOffset = 5 * 24 * 60 * 60 * 1000;

const intensity_url = 'https://api.carbonintensity.org.uk/intensity';
const factors_url ='https://api.carbonintensity.org.uk/intensity/factors';
const generation_url = 'https://api.carbonintensity.org.uk/generation';


export default class App extends Component {

  state = {
    intensity: [],
    intensity_factors: [],
    generation: [],
    timeseries: [],
    updated: 'Mon Jun 17 2019 09:24:20 GMT+1000 (Australian Eastern Standard Time)'
  }

  componentDidMount() {
    axios.get(intensity_url)
    .then(
      response => {
        this.setState({intensity: response.data.data});
      }
    )
    .catch(
      error => {
        console.log(`An error has occured with the intensity call ${error}`);
      }
    )
    
    axios.get(factors_url)
    .then(
      response => {
        this.setState({intensity_factors: response.data.data});
      }
    )
    .catch(
      error => {
        console.log(`An error has occured with the factors call ${error}`);
      }
    )

    axios.get(generation_url)
    .then(
      response => {
        console.log(response.data.data.generationmix);
        this.setState({generation: response.data.data.generationmix});
      }
    )
    .catch(
      error => {
        console.log(`An error has occured with the generation call ${error}`);
      }
    )

    let nowDate = new Date();
    let nowMilli = nowDate.getTime();
    let beforeMilli = nowMilli - milliOffset;
    let oldDate = new Date(beforeMilli);

    fromJsonDate = oldDate.toJSON();
    toJsonDate = nowDate.toJSON();

    let timeseries_url = `https://api.carbonintensity.org.uk/intensity/${fromJsonDate}/${toJsonDate}`
    
    axios.get(timeseries_url)
    .then(
      response => this.setState({timeseries: response.data.data})
    )
    .catch(
      error => console.log(`There was an error retrieving data from the timeseries route ${error}`)
    )

  }

  render() {

    return (
      <React.Fragment>
                <Summary updated={this.state.updated}/>
                <Introduction/>
                <Intensity intensity={this.state.intensity}/>
                <Factor intensity_factors={this.state.intensity_factors}/>
                <Generation generation={this.state.generation}/>
                <TimeSeries timeseries={this.state.timeseries}/>
                <Comparison/>
                <License/>
              <Footer/>
        </React.Fragment>
    )
  }
}

