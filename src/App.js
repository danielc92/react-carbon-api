import React, { Component } from 'react'
import axios from 'axios';
import Factor from './components/Factor';
import Intensity from './components/Intensity';
import Summary from './components/Summary';
import Generation from './components/Generation';
import Footer from './components/Footer';


const intensity_url = 'https://api.carbonintensity.org.uk/intensity';
const factors_url ='https://api.carbonintensity.org.uk/intensity/factors';
const generation_url = 'https://api.carbonintensity.org.uk/generation';


export default class App extends Component {

  state = {
    intensity: [],
    intensity_factors: [],
    generation: []
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

  }

  render() {

    return (
      <React.Fragment>
          <section className="section">
            <section className="container">
                <Summary/>
                <Intensity intensity={this.state.intensity}/>
                <Factor intensity_factors={this.state.intensity_factors}/>
                <Generation generation={this.state.generation}/>
              </section>
            </section>

            <Footer/>
        </React.Fragment>
    )
  }
}

