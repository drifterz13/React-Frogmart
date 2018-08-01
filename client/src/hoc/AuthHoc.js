import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export const withAuth = WrappedComponent => {
  class EnhancedComponent extends Component {
    render() {
      if (!this.props.isAuthenticated) {
        return <Redirect to='/signin' />
      }
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
