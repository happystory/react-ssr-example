import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHomeList } from './store/actions';
import styles from './style.css';

class Home extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

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

Home.loadData = (store)  => {
  return store.dispatch(getHomeList());
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
