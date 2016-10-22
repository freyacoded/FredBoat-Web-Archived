import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" id="App">
        {this.props.rand}
      </div>
    );
  }
}



/*ReactDOM.render(
  <Header />,
  document.getElementById('Header')
);*/

/*var i = 0;

function tick() {
    ReactDOM.render(
        <App rand={i} />,
        document.getElementById('App')
    );
    i++;
}

setInterval(tick, 1);*/

export default App;
