import {Component} from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ProductGrid from '../ProductGrid'
import Footer from '../Footer'
import SortBar from '../SortBar'
import './index.css'

class ProductListingPage extends Component {
  state = {isvisible: true}

  toggleFilter = () => {
    this.setState(prevState => ({isvisible: !prevState.isvisible}))
  }

  render() {
    const {isvisible} = this.state
    return (
      <div className="plp-container">
        <Header />
        <div className="container">
          <div className="header-hero">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
          <SortBar
            onToggleFilter={this.toggleFilter}
            filterVisible={isvisible}
          />
          <div className="plp-content">
            {isvisible && <Sidebar />}
            <ProductGrid />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProductListingPage
