import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="content">
                    <h1>Carbon Intensity National Report (United Kingdom)</h1>
                    <p>By: Daniel Corcoran</p>
                    <p className="customcode help">Last updated: {this.props.updated}</p>
                    <hr></hr>
                    
                    <p>This report was built for the purpose of learning how to integrate third party APIs with a React application. This project takes an open-source approach and costed nothing to create. Key information for this project is listed below:</p>
                    <ul>
                        <li>Data from this report is ingested from the Carbon Intensity API, a third party, publicly available API service. The data is live.</li>
                        <li>Data is processed using Javascripts axios library</li>
                        <li>React.js was used to build the front-end and handle the API calls.</li>
                        <li>Chart.js was used to generate the visualizations.</li>
                        <li>HTML styled with Bulma CSS Framework</li>
                    </ul>
                </section>

               
                
                <section className="content">
                    <h3>Introduction</h3>
                    <hr></hr>
                    <p>The Carbon Intensity API was built in order to allow developers to produce applications that will enable consumers to optimise their behaviour and minimise CO2 emissions. The API holds data relating to emissions from electricity generation only; including large metered power stations, interconnector imports, transmission and distribution losses. For more information please visit the official <a href="https://carbonintensity.org.uk/">here.</a></p>
                </section>
               
                
            </React.Fragment>
        )
    }
}
