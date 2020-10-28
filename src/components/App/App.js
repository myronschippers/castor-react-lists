import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <p>Welcome to Lists in react</p>
          {/* CODE COMMENT */}
        </main>
      </div>
    );
  }
}

export default App;
