import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="content">
                    <h1>Carbon Intensity (National, United Kingdom)</h1>
                    <p className="customcode help">Last updated: {this.props.updated}</p>
                    <hr></hr>
                    
                    <p>This React Application will ingest data from the Carbon Intensity API and display it in a report like format. axios library is being used to process the api calls.</p>    
                </section>
                
                <section className="content">
                    <h3>Summary</h3>
                    <hr></hr>
                    <p>National Grid’s Carbon Intensity API provides an indicative trend of regional carbon intensity of the electricity system in Great Britain (GB) up to 2 days ahead of real-time. It provides programmatic and timely access to both forecast and estimated carbon intensity data. The Carbon Intensity forecast includes CO2 emissions related to electricity generation only. The includes emissions from all large metered power stations, interconnector imports, transmission and distribution losses, and accounts for national electricity demand, embedded wind and solar generation.</p>
                </section>
               
                
            </React.Fragment>
        )
    }
}
