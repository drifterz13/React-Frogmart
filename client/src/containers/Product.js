import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../stores/actions/product'
import { addProductToCart, plusProduct } from '../stores/actions/cart'
import ProductList from '../components/ProductList'
import Loader from 'react-loader'
import '../assets/css/Product.css'

class Product extends Component {
  state = {
    products: [],
    loaded: true
  }

  componentDidMount() {
    this.setState({ loaded: false })
    this.props.getProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const products = this.props.products.map(p => ({ ...p }))
      this.setState({ products, loaded: true })
    }
  }

  addToCart(product) {
    const haveProduct = this.props.cart.find(p => p._id === product._id)
    if (haveProduct) {
      this.props.plusProduct(product._id)
    } else {
      const cartProduct = {...product, amount: 1}
      this.props.addProductToCart(cartProduct)
    }
    this.props.history.push('/cart')
  }

  render() {
    return (
      <div className='container'>
        <Loader loaded={this.state.loaded} color='#2d7df6'/>
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
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps, { getProducts, addProductToCart, plusProduct })(Product)