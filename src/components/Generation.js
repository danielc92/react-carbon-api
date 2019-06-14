import React, { Component } from 'react'
import svg_source from '../images/undraw_metrics_gtu7.svg';


export default class Generation extends Component {
    render() {
        return (
        <section className="content">
            <h3>Generation Mix</h3>
            <p className="customcode help">Data available via the /generation route</p>
            <section className="columns">
                <section className="column">
                    <table className="table is-striped">
                        <thead>
                            <tr>
                                <th>Fuel</th>
                                <th>Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.generation.map(item => {
                                return (
                                    <tr>
                                        <td>{item['fuel']}</td>
                                        <td className="customcode">{item['perc']}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
                <section className="column">
                   <img src={svg_source} alt=""/>
                </section>
            </section>
        </section>
        )
    }
}
