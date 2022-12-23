import React, { Component } from 'react'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.toDoName}</td>
                <td>{this.props.time}</td>
                <td>{this.props.status}</td>
            </tr>
        )
    }
}
