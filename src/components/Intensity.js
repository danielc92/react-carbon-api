import React, { Component } from 'react'
import svg_source from '../images/undraw_metrics_gtu7.svg';


export default class Intensity extends Component {
    render() {
        return (
        <section className="content">
            <div className="columns is-vcentered">
                <div className="column">
                <h4>Intensity</h4>
                <p className="customcode help">Data available via the /intensity route</p>
            <hr></hr>
            {this.props.intensity.map(item => {return(
            <React.Fragment>
                <table className="table is-striped">
                    <thead>
                        <tr>
                        <th>Attribute</th>
                        <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Date (from)</td>
                            <td className="customcode">{item['from']}</td>
                        </tr>
                        <tr>
                            <td>Date (to)</td>
                            <td className="customcode">{item['to']}</td>
                        </tr>
                        {Object.entries(item['intensity']).map(entry => {
                            return (<React.Fragment>
                                    <tr>
                                        <td>{entry[0]}</td>
                                        <td className="customcode">{entry[1]}</td>
                                    </tr>
                                    </React.Fragment>)})}
                    </tbody>
                </table>
            </React.Fragment>)
            })}
    
                </div>
                <div className="column">
                    <img src={svg_source} alt=""/>
                </div>
            </div>
        </section>
        )
    }
}
