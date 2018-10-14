import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTranslationList } from './store/actions';
import styles from './style.css';
import withStyle from '../../withStyle';

class Translation extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList();
    }
  }

  getList() {
    const { list } = this.props;
    return list.map(item => (
      <div key={item.id}>{item.title}</div>
    ))
  }

  render() {
    return this.props.login ? (
      <div className={styles.test}>
        { this.getList() }
      </div>
    ) : <Redirect to='/' />
  }
}

const mapStateToProps = (state) => ({
  list: state.translation.translationList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

const ExportTransition = connect(mapStateToProps, mapDispatchToProps)(withStyle(Translation, styles));
ExportTransition.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

export default ExportTransition;
