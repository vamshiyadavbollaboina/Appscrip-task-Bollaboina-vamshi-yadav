import {Component} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import {SlHandbag} from 'react-icons/sl'
import {HiOutlineUser} from 'react-icons/hi2'
import {FaBars} from 'react-icons/fa'
import './index.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-top-strip">
          <div className="header-info-item">
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762001140/element-4_ux0qkl.png"
              alt="logo"
            />
            <p className="header-info-text">Lorem ipsum dolor</p>
          </div>
          <div className="header-info-item">
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762001140/element-4_ux0qkl.png"
              alt="logo"
            />
            <p className="header-info-text">Lorem ipsum dolor</p>
          </div>
          <div className="header-info-item">
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762001140/element-4_ux0qkl.png"
              alt="logo"
            />
            <p className="header-info-text">Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="header-main">
          <div className="header-menu-icon">
            <FaBars />
          </div>

          <div className="header-logo-wrapper">
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762000033/Logo_lbaxfr.png"
              alt="logo"
              className="header-logo-image"
            />
          </div>
          <h1 className="header-logo-text">LOGO</h1>
          <div className="header-icons">
            <CiSearch />
            <AiOutlineHeart />
            <SlHandbag />
            <HiOutlineUser />
            <select className="header-lang-select">
              <option>ENG</option>
            </select>
          </div>
        </div>

        <nav className="header-nav">
          <a href="/">SHOP</a>
          <a href="/">SKILLS</a>
          <a href="/">STORIES</a>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT US</a>
        </nav>

        <hr className="header-divider" />

        <div className="header-mobile">
          <div className="header-mobile-top">
            <div>
              <FaBars className="mobile-icon" />
              <img
                src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762000033/Logo_lbaxfr.png"
                alt="logo"
                className="header-logo-image-mobile"
              />
            </div>
            <h1 className="header-mobile-logo">LOGO</h1>
            <div className="mobile-icons">
              <CiSearch className="mobile-icon" />
              <AiOutlineHeart className="mobile-icon" />
              <SlHandbag className="mobile-icon" />
            </div>
          </div>

          <div className="header-mobile-links">
            <span className="Home-label">Home</span>
            <span>|</span>
            <span>Shop</span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
