import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    
    render() {

        const characters = [
            {
              name: 'Charlie',
              job: 'Janitor',
            },
            {
              name: 'Mac',
              job: 'Bouncer',
            },
            {
              name: 'Dee',
              job: 'Aspring actress',
            },
            {
              name: 'Dennis',
              job: 'Bartender',
            },
          ]

        return (
            <div className="container">
                <h1>Hello, React Again!</h1>
                <Table charactersData={characters}></Table>
            </div>
        )
    }
}

export default App