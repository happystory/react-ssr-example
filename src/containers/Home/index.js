import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>This is 555!</div>
        <button onClick={() => {alert('say test!')}}>click me</button>
      </div>
    );
  }
}

export default Home;
