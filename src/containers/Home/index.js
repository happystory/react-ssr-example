import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHomeList } from './store/actions';
import styles from './style.css';
import withStyle from '../../withStyle';

class Home extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  getList() {
    const { list } = this.props;
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }

  render() {
    return (
      <div className={styles.test}>
        { this.getList() }
        <button onClick={() => {alert('click1')}}>
          click
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));
ExportHome.loadData = (store)  => {
  return store.dispatch(getHomeList());
}

export default ExportHome;
