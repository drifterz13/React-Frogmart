import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../stores/actions/product'
import ProductList from '../components/ProductList'
import './Product.css'

class Product extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.props.getProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const products = this.props.products.map(p => ({ ...p }))
      console.log(products)
      this.setState({ products })
    }
  }

  addToCart(product) {
    console.log('Product: ', product)
    this.props.addProductToCart(product)
    this.props.history.push('/cart')
  }

  render() {
    return (
      <div className='container'>
        <ul className='product-wrapped row'>
          {this.state.products.map((p, i) => (
            <ProductList key={i} product={p} addToCart={product => this.addToCart(product)} />
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, actions)(Product)