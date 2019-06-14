import React, { Component } from 'react'

export default class Summary extends Component {
    render() {
        return (
            <React.Fragment>
                
                <h2>Carbon Intensity (National, United Kingdom)</h2>
                <hr></hr>
                
                <h3>Summary</h3>
                <hr></hr>
                <p>National Grid’s Carbon Intensity API provides an indicative trend of regional carbon intensity of the electricity system in Great Britain (GB) up to 2 days ahead of real-time. It provides programmatic and timely access to both forecast and estimated carbon intensity data. The Carbon Intensity forecast includes CO2 emissions related to electricity generation only. The includes emissions from all large metered power stations, interconnector imports, transmission and distribution losses, and accounts for national electricity demand, embedded wind and solar generation.</p>
            
            </React.Fragment>
        )
    }
}
