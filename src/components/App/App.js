import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    creatures: ['Unicorn', 'Sphinx', 'Kappa', 'Dryad', 'Jackalope'],
  };

  handleAddDragon = () => {
    this.setState({
      creatures: [...this.state.creatures, 'Dragon'],
    });
  };

  render() {
    // const listElements = [];

    // for (let i = 0; i < this.state.creatures.length; i++) {
    //   const creature = this.state.creatures[i];
    //   listElements.push(<li key={i}>{creature}</li>);
    // }

    // forEach method
    // this.state.creatures.forEach(function (item, index) {
    //   listElements.push(<li key={index}>{item}</li>);
    // });

    // map method
    const listElements = this.state.creatures.map(function (item, index) {
      return <li key={index}>{item}</li>;
    });
    // console.log(listElements);

    return (
      <div>
        <Header />
        <main className="container">
          <p>Welcome to Lists in react</p>
          {/* CODE COMMENT */}
          {this.state.creatures}
          <div>
            <button onClick={this.handleAddDragon}>Add Dragon</button>
          </div>
          <ul>
            {/* this.state.creatures.map((item, index) => (
              <li key={index}>{item}</li>
            )) */}
            {listElements}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
