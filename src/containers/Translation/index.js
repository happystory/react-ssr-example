import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslationList } from './store/actions';

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
    return (
      <div>
        { this.getList() }
      </div>
    );
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList());
};

const mapStateToProps = (state) => ({
  list: state.translation.translationList
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
