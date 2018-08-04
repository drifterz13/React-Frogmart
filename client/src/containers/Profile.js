import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../services/api';
import ProfileHistory from '../components/ProfileHistory'

class Profile extends Component {
  state = {
    orderHistory: [],
    errors: null
  };


  componentDidMount() {
    const url = 'http://localhost:5000/api/order';
    api(url)
      .order.getOrderHistory()
      .then(res => {
        this.setState({ orderHistory: [...this.state.orderHistory, ...res.data] })
      })
      .catch(err => {
        this.setState({ errors: err.response.data })
      })
  }

  render() {
    return (
      <div className='container' style={{ marginTop: '100px' }}>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-sm-12'>
          <h2 className='lead pb-1' style={{fontWeight: '400'}}>Shopping History</h2>
          <hr />
            {this.state.errors && (
              <div className='alert alert-warning text-center p-1'>{this.state.errors.message}</div>
            )}
            {this.state.orderHistory.map((order, i) => (
              <ProfileHistory key={i} orderList={order} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Profile);
