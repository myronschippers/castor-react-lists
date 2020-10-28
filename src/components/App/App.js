import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    // enteredCreature: '',
    // enteredOrigin: '',
    form: {
      name: '',
      origin: '',
    },
    creatures: [
      { name: 'Unicorn', origin: ' Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Jackalope', origin: 'Kansas' },
    ],
  };

  handleClickAdd = (event) => {
    this.setState({
      creatures: [
        ...this.state.creatures,
        {
          ...this.state.form,
        },
      ],
    });
  };

  handleChangeCreature = (event) => {
    this.setState({
      // enteredCreature: event.target.value,
      form: {
        ...this.state.form,
        name: event.target.value,
      },
    });
  };

  handleChangeOrigin = (event) => {
    this.setState({
      // enteredOrigin: event.target.value,
      form: {
        ...this.state.form,
        origin: event.target.value,
      },
    });
  };

  render() {
    // map method
    const listElements = this.state.creatures.map(function (item, index) {
      return (
        <li key={index}>
          {item.name} is originating from {item.origin}
        </li>
      );
    });

    return (
      <div>
        <Header />
        <main className="container">
          <p>Welcome to Lists in react</p>
          {/* CODE COMMENT */}
          <div>
            <input
              type="text"
              placeholder="Creature Name"
              name="creature"
              onChange={this.handleChangeCreature}
            />
            <input
              type="text"
              placeholder="Creature Origin"
              name="origin"
              onChange={this.handleChangeOrigin}
            />
            <button onClick={this.handleClickAdd}>Add</button>
          </div>
          <ul>{listElements}</ul>
        </main>
      </div>
    );
  }
}

export default App;
