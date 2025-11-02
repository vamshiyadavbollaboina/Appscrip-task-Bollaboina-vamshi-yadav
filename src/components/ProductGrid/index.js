import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import ProductCard from '../ProductCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductGrid extends Component {
  state = {
    products: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://fakestoreapi.com/products'

    try {
      const response = await fetch(apiUrl)

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          imageUrl: product.image,
          rating: product.rating?.rate || 0,
        }))

        this.setState({
          products: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderProductsList = () => {
    const {products} = this.state
    return (
      <ul className="product-grid">
        {products.map(product => (
          <li key={product.id} className="product-grid__item">
            <ProductCard productData={product} />
          </li>
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <ThreeDots height="50" width="50" color="#0b69ff" ariaLabel="loading" />
    </div>
  )

  renderFailureView = () => (
    <div className="error">
      <h1>Failed to load products</h1>
      <p>There was an issue fetching the product data. Please try again.</p>
      <button type="button" onClick={this.getProducts}>
        Retry Loading
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsList()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default ProductGrid
