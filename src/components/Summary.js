import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <section className="section">
                <section className="container">
                <section className="content">
                    <h1>Carbon Intensity National Report (United Kingdom)</h1>
                    <p>By: Daniel Corcoran</p>
                    <p className="customcode help has-text-primary">Last updated: {this.props.updated}</p>
                    <hr></hr>

                            <p>This report was built for the purpose of learning how to integrate third party APIs with a React application. This project takes an open-source approach and was built at no cost.</p>
                   
                            <p>Key information for this project is listed below:</p>
                            <ul>
                                <li>Data from this report is ingested from the Carbon Intensity API, a third party, publicly available API service. The data is live.</li>
                                <li>Data is processed using Javascripts axios library</li>
                                <li>React.js was used to build the front-end and handle the API calls.</li>
                                <li>Chart.js was used to generate the visualizations.</li>
                                <li>HTML styled with Bulma CSS Framework</li>
                            </ul>
                    <p>Get the <strong>source code</strong> for this project below.</p>
                            
                            <a style={{marginBottom: '1rem', transition: 'background-color 0.25s ease'}} class="button is-outlined is-primary is-medium" href="https://github.com/danielc92/react-carbon-api.git">
                                <span class="icon">
                                <i class="fab fa-github"></i>
                                </span>
                                
                                <span>Source Code</span>
                            </a>
                    
                    
                </section>
                </section>
            </section>
        )
    }
}
