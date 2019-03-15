import React, {Component} from 'react';
import HeaderContainer from './components/container/HeaderContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <HeaderContainer/>
        </header>
      </div>
    );
  }
}

export default App;
