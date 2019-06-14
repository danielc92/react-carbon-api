import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <ul>
                        <li><a href="https://carbonintensity.org.uk/">Learn more about the Carbon Intensity API</a></li>
                        <li><a href="https://carbon-intensity.github.io/api-definitions/?javascript#carbon-intensity-api-v2-0-0">Visit the Carbon API Documentation</a></li>
                        <li><a href="https://github.com/public-apis/public-apis">List of other publicly available APIs</a></li>
                        <li>Built with <a href="https://reactjs.org/">React.js</a></li>
                    </ul>

                </div>
            </div>
        )
    }
}
