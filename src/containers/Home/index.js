import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        Hello, { this.props.name }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  }
};

export default connect(mapStateToProps, null)(Home);
