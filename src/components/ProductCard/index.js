import {Component} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import './index.css'

class ProductCard extends Component {
  render() {
    const {productData} = this.props
    const {imageUrl, title} = productData

    return (
      <li className="product-card">
        <img src={imageUrl} alt={title} className="product-card-image" />
        <div className="product-card-content">
          <p className="product-card-title">{title}</p>
          <div className="product-card-info">
            <p className="product-card-text">
              <span className="product-card-signin">Sign in</span> or Create an
              account to see pricing
            </p>
            <button
              type="button"
              className="product-card-wishlist-btn"
              aria-label="Add to wishlist"
            >
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default ProductCard
