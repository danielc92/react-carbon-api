import React, { Component } from 'react'

export default class Generation extends Component {
    render() {
        return (
        <section className="content">
            <h3>Generation Mix</h3>
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
                                        <td>{item['perc']}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
                <section className="column">
                    <code>Filler</code>
                </section>
            </section>
        </section>
        )
    }
}
