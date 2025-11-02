import {Component} from 'react'
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
} from 'react-icons/fa'
import './index.css'

class SortBar extends Component {
  state = {
    isDropdownOpen: false,
    selectedOption: 'RECOMMENDED',
    totalItems: 3425,
    options: [
      'RECOMMENDED',
      'NEWEST FIRST',
      'POPULAR',
      'PRICE : HIGH TO LOW',
      'PRICE : LOW TO HIGH',
    ],
  }

  toggleDropdown = () => {
    this.setState(prev => ({isDropdownOpen: !prev.isDropdownOpen}))
  }

  handleOptionSelect = option => {
    this.setState({selectedOption: option, isDropdownOpen: false})
  }

  handleKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.toggleDropdown()
    }
  }

  render() {
    const {isDropdownOpen, selectedOption, totalItems, options} = this.state
    const {onToggleFilter, filterVisible} = this.props

    return (
      <div className="sortbar-wrapper">
        <div className="sortbar-left">
          <span className="item-count">{totalItems} ITEMS</span>
          <button
            type="button"
            className="hide-filter"
            onClick={onToggleFilter}
          >
            {filterVisible ? (
              <FaChevronLeft className="left-arrow" />
            ) : (
              <FaChevronRight className="left-arrow" />
            )}
            {filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>

        <div className="sortbar-right">
          <div
            role="button"
            tabIndex={0}
            className="dropdown-toggle"
            onClick={this.toggleDropdown}
            onKeyDown={this.handleKeyPress}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <span className="dropdown-label">{selectedOption}</span>
            <FaChevronDown
              className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
            />
          </div>

          {isDropdownOpen && (
            <ul className="dropdown-menu" role="listbox">
              {options.map(option => (
                <li key={option} className="dropdown-list">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedOption === option}
                    className={`dropdown-option ${
                      selectedOption === option ? 'selected' : ''
                    }`}
                    onClick={() => this.handleOptionSelect(option)}
                  >
                    {selectedOption === option && (
                      <FaCheck className="checkmark" />
                    )}
                    <span>{option}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default SortBar
