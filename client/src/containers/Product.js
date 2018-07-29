import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../stores/actions/product'
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

  render() {
    return (
      <div className='container'>
        <ul className='product-wrapped row'>
          {this.state.products.map((p, i) => (
            <ProductList key={i} product={p} />
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

export default connect(mapStateToProps, { getProducts })(Product)