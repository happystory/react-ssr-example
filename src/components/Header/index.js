import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';
import styles from './style.css';
import withStyle from '../../withStyle';

class Header extends Component {
  render() {
    const { login } = this.props;
    return (
      <div className={styles.container}>
        <NavLink exact to="/" className={styles.item} activeClassName={styles.active}>首页</NavLink>
        {
          login
          ?
          <Fragment>
            <NavLink to="/translation" className={styles.item} activeClassName={styles.active}>翻译列表</NavLink>
            <div onClick={this.props.handleLogout} className={`${styles.item} ${styles.login}`}>退出</div>
          </Fragment>
          :
          <div onClick={this.props.handleLogin} className={`${styles.item} ${styles.login}`}>登录</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.header.login
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout());
  }
});

const ExportHeader = connect(mapStateToProps, mapDispatchToProps)(withStyle(Header, styles));

export default ExportHeader;
