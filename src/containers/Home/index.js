import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div>This is liuyao!</div>
        <button onClick={() => {alert('say hi!')}}>click me</button>
      </div>
    );
  }
}

export default Home;
