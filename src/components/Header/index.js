import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';
import styles from './style.css';

class Header extends Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.css.push(styles._getCss());
    }
  }

  render() {
    const { login } = this.props;
    return (
      <div className={styles.test}>
        <Link to="/">首页</Link>
        <br />
        {
          login
          ?
          <Fragment>
            <Link to="/translation">翻译列表</Link>
            <br />
            <div onClick={this.props.handleLogout}>退出</div>
          </Fragment>
          :
          <div onClick={this.props.handleLogin}>登录</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
