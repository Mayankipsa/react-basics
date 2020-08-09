import React, { Component } from 'react'

class Table extends Component {
    render() {
        const {charactersData}=this.props

        return (
            <table className='table'>
                <TableHeader></TableHeader>
                <TableBody charactersData={charactersData}></TableBody>
            </table>
        )
    }

}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const rows = props.charactersData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })

    return (
        <tbody>
            {rows}
        </tbody>
    )
}

export default Table