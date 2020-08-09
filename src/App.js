import React, { Component } from 'react'
import Table from './Table'
import Form from "./FormAddChar";

class App extends Component {

  state = {
    characters: []
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {

    const { characters } = this.state

    return (
      <div className="container">
        <h1>React Basics</h1>
        <p>Add a character with a name and job to the table using form below.
        <br/>Data is not saved on server so will be cleaned on refresh.</p>
        <Table charactersData={characters} removeCharacter={this.removeCharacter}></Table>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default App