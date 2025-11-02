import {Component} from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import './index.css'

class Sidebar extends Component {
  state = {
    expanded: {
      idealFor: false,
      occasion: false,
      work: false,
      fabric: false,
      segment: false,
      suitableFor: false,
      rawMaterials: false,
      pattern: false,
      color: false,
      price: false,
      brand: false,
      discount: false,
    },
    customizable: false,
    selected: {
      idealFor: [],
      occasion: [],
      work: [],
      fabric: [],
      segment: [],
      suitableFor: [],
      rawMaterials: [],
      pattern: [],
      color: [],
      price: [],
      brand: [],
      discount: [],
    },
  }

  toggleSection = key => {
    this.setState(prevState => ({
      expanded: {...prevState.expanded, [key]: !prevState.expanded[key]},
    }))
  }

  handleKeyToggle = (event, key) => {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSection(key)
    }
  }

  handleCheckboxChange = (key, item) => {
    this.setState(prevState => {
      const section = prevState.selected[key]
      const updated = section.includes(item)
        ? section.filter(i => i !== item)
        : [...section, item]
      return {selected: {...prevState.selected, [key]: updated}}
    })
  }

  handleCustomizableChange = () => {
    this.setState(prev => ({customizable: !prev.customizable}))
  }

  unselectAll = key => {
    this.setState(prevState => ({
      selected: {...prevState.selected, [key]: []},
    }))
  }

  renderFilterGroup(title, key, isExpanded, items) {
    const {selected} = this.state
    return (
      <div className="filter-group">
        <div
          role="button"
          tabIndex={0}
          onClick={() => this.toggleSection(key)}
          onKeyDown={event => this.handleKeyToggle(event, key)}
          className="filter-title"
          aria-expanded={isExpanded}
        >
          <div className="filter-header">
            <p className="filter-label">{title}</p>
            <span className="filter-arrow">
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          <p className="filter-subtext">All</p>
        </div>

        {isExpanded && (
          <div className="filter-content">
            <span
              role="button"
              tabIndex={0}
              className="unselect-text"
              onClick={() => this.unselectAll(key)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') this.unselectAll(key)
              }}
            >
              Unselect all
            </span>

            <ul>
              {items.map(item => (
                <li key={item}>
                  <label htmlFor={`${key}-${item}`} className="filter-item">
                    <input
                      id={`${key}-${item}`}
                      type="checkbox"
                      name={key}
                      value={item}
                      checked={selected[key].includes(item)}
                      onChange={() => this.handleCheckboxChange(key, item)}
                    />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  render() {
    const {expanded, customizable} = this.state
    const {className = ''} = this.props

    return (
      <aside className={`sidebar ${className}`}>
        <form className="filter-section">
          <div className="filter-group top-filter">
            <label htmlFor="customizable" className="filter-item">
              <input
                type="checkbox"
                id="customizable"
                checked={customizable}
                onChange={this.handleCustomizableChange}
              />
              <span className="filter-heading">CUSTOMIZABLE</span>
            </label>
          </div>

          {this.renderFilterGroup('IDEAL FOR', 'idealFor', expanded.idealFor, [
            'Men',
            'Women',
            'Baby & Kids',
          ])}
          {this.renderFilterGroup('OCCASION', 'occasion', expanded.occasion, [
            'Casual',
            'Party',
            'Festive',
            'Wedding',
          ])}
          {this.renderFilterGroup('WORK', 'work', expanded.work, [
            'Formal',
            'Casual',
            'Outdoor',
          ])}
          {this.renderFilterGroup('FABRIC', 'fabric', expanded.fabric, [
            'Cotton',
            'Silk',
            'Wool',
            'Denim',
          ])}
          {this.renderFilterGroup('SEGMENT', 'segment', expanded.segment, [
            'Men',
            'Women',
            'Kids',
          ])}
          {this.renderFilterGroup(
            'SUITABLE FOR',
            'suitableFor',
            expanded.suitableFor,
            ['Summer', 'Winter', 'All Season'],
          )}
          {this.renderFilterGroup(
            'RAW MATERIALS',
            'rawMaterials',
            expanded.rawMaterials,
            ['Cotton', 'Silk', 'Polyester'],
          )}
          {this.renderFilterGroup('PATTERN', 'pattern', expanded.pattern, [
            'Solid',
            'Printed',
            'Checked',
            'Striped',
          ])}
          {this.renderFilterGroup('COLOR', 'color', expanded.color, [
            'Red',
            'Blue',
            'Green',
            'Black',
          ])}
          {this.renderFilterGroup('PRICE RANGE', 'price', expanded.price, [
            'Under ₹500',
            '₹500 - ₹1000',
            '₹1000 - ₹2000',
            'Above ₹2000',
          ])}
          {this.renderFilterGroup('BRAND', 'brand', expanded.brand, [
            'Roadster',
            'HRX',
            'Levis',
            'Zara',
          ])}
          {this.renderFilterGroup('DISCOUNT', 'discount', expanded.discount, [
            '10% or more',
            '25% or more',
            '50% or more',
          ])}
        </form>
      </aside>
    )
  }
}

export default Sidebar
