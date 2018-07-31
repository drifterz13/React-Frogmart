import React, { Component } from 'react';
import { connect } from 'react-redux';

export const withAuth = WrappedComponent => {
  class EnhancedComponent extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(EnhancedComponent);
};
