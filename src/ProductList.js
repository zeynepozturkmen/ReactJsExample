import React, { Component } from 'react'

export default class  extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.props.info.baskaBiSey}</h3>
            </div>
        )
    }
}
