import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../stores/actions/auth';

const initialState = {
  user: {
    username: '',
    email: '',
    password: ''
  },
  errors: null
}
class AuthForm extends Component {
  state = initialState

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.setState(initialState)
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .auth(this.props.type, this.state.user)
      .then(() => {
        this.setState({
          ...this.state,
          user: { username: '', email: '', password: '' }
        });
        this.props.history.push('/product');
      })
      .catch(err => {
        console.log('error', err);
        this.setState({ errors: err });
      });
  };

  render() {
    const { username, email, password } = this.state.user;
    const { errors } = this.state
    return (
      <div className='container' style={{ paddingTop: '100px' }}>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12'>
            <form onSubmit={this.handleSubmit}>
              {errors && (
                <div className='alert alert-danger text-center p-1'>{errors.message}</div>
              )}
              {this.props.type === 'signup' && (
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    className={errors ? 'form-control is-invalid' : 'form-control'}
                    name='username'
                    id='username'
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
              )}
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className={errors ? 'form-control is-invalid' : 'form-control'}
                  name='email'
                  id='email'
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className={errors ? 'form-control is-invalid' : 'form-control'}
                  name='password'
                  id='password'
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { auth }
)(AuthForm);
