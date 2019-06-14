import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <ul>
                        <li><a href="https://carbonintensity.org.uk/">Learn more</a> about the Carbon Intensity API</li>
                        <li>Visit the Carbon API <a href="https://carbon-intensity.github.io/api-definitions/?javascript#carbon-intensity-api-v2-0-0">Documentation</a></li>
                        <li>List of other publicly available <a href="https://github.com/public-apis/public-apis">APIs</a></li>
                        <li>Built with <a href="https://reactjs.org/">React.js</a></li>
                        <li>Illustrations from <a href="https://undraw.co/illustrations">undraw</a></li> 
                    </ul>
                </div>
            </div>
        )
    }
}
