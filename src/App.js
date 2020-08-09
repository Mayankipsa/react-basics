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
        <h1>Hello, React Again!</h1>
        <Table charactersData={characters} removeCharacter={this.removeCharacter}></Table>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

}

export default App