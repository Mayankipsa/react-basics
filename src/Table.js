import React, { Component } from 'react'

class Table extends Component {
    render() {
        const { charactersData, removeCharacter } = this.props

        return (
            <table className='table'>
                <TableHeader></TableHeader>
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}></TableBody>
            </table>
        )
    }

}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const rows = props.charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
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