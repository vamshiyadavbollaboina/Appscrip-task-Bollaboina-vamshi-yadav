import {Component} from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {FaChevronDown, FaChevronUp, FaLinkedin} from 'react-icons/fa'
import './index.css'

class Footer extends Component {
  state = {openMenu: null}

  toggleMenu = menu => {
    this.setState(prev => ({
      openMenu: prev.openMenu === menu ? null : menu,
    }))
  }

  render() {
    const {openMenu} = this.state

    return (
      <footer className="footer">
        <div className="footer-desktop">
          <div className="footer-top">
            <div className="footer-subscribe">
              <h4>BE THE FIRST TO KNOW</h4>
              <p>Sign up for updates from mettā muse.</p>
              <div className="footer-input">
                <input type="email" placeholder="Enter your e-mail..." />
                <button type="button">SUBSCRIBE</button>
              </div>
            </div>

            <div className="footer-contact">
              <div>
                <h4>CALL US</h4>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
              <div>
                <h4>CURRENCY</h4>
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762025726/Language_g5uxfu.png"
                  alt="usd"
                />
                <p className="currency-desc">
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </div>
            </div>
          </div>

          <hr className="footer-line" />

          <div className="footer-bottom">
            <div className="footer-column">
              <h4>mettä muse</h4>
              <a href="#about">About Us</a>
              <a href="#stories">Stories</a>
              <a href="#artisans">Artisans</a>
              <a href="#boutiques">Boutiques</a>
              <a href="#contact">Contact Us</a>
              <a href="#docs">EU Compliances Docs</a>
            </div>

            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <a href="#orders">Orders & Shipping</a>
              <a href="#seller">Join/Login as a Seller</a>
              <a href="#payment">Payment & Pricing</a>
              <a href="#returns">Return & Refunds</a>
              <a href="#faq">FAQs</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>

            <div className="footer-social">
              <h4>FOLLOW US</h4>
              <div className="social-icons">
                <RiInstagramFill />
                <FaLinkedin />
              </div>

              <h4 className="accept-title">mettä muse ACCEPTS</h4>
              <div className="payment-icons">
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034016/Group_136188_xooch9.png"
                  alt="Google Pay"
                />
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034093/Group_136190_te82vl.png"
                  alt="Visa"
                />
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034236/Group_136191_h9okuk.png"
                  alt="PayPal"
                />
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034313/Group_136193_rlhaiz.png"
                  alt="Amex"
                />
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034379/Group_xzmsvs.png"
                  alt="Apple Pay"
                />
                <img
                  src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034431/Vector_nvpzxa.png"
                  alt="O Pay"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-mobile">
          <div className="footer-subscribe">
            <h4>BE THE FIRST TO KNOW</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <div className="footer-input">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="button">SUBSCRIBE</button>
            </div>
          </div>

          <div className="footer-contact">
            <h4>CALL US</h4>
            <p>+44 221 133 5360 • customercare@mettamuse.com</p>
          </div>

          <div className="footer-currency">
            <h4>CURRENCY</h4>
            <p>
              <img
                src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762025726/Language_g5uxfu.png"
                alt="usd"
              />
            </p>
          </div>

          <div
            role="button"
            tabIndex={0}
            className="dropdown-header"
            onClick={() => this.toggleMenu('metta')}
            onKeyDown={() => this.toggleMenu('metta')}
          >
            mettä muse{' '}
            <span>
              {openMenu === 'metta' ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openMenu === 'metta' && (
            <ul className="dropdown-content">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}

          <div
            role="button"
            tabIndex={0}
            className="dropdown-header"
            onClick={() => this.toggleMenu('quick')}
            onKeyDown={() => this.toggleMenu('quick')}
          >
            QUICK LINKS{' '}
            <span>
              {openMenu === 'quick' ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openMenu === 'quick' && (
            <ul className="dropdown-content">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}

          <div
            role="button"
            tabIndex={0}
            className="dropdown-header"
            onClick={() => this.toggleMenu('follow')}
            onKeyDown={() => this.toggleMenu('follow')}
          >
            FOLLOW US{' '}
            <span>
              {openMenu === 'follow' ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {openMenu === 'follow' && (
            <div className="social-icons">
              <RiInstagramFill />
              <FaLinkedin />
            </div>
          )}

          <h4 className="accept-title">mettä muse ACCEPTS</h4>
          <div className="payment-icons">
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034016/Group_136188_xooch9.png"
              alt="Google Pay"
            />
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034093/Group_136190_te82vl.png"
              alt="Visa"
            />
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034236/Group_136191_h9okuk.png"
              alt="PayPal"
            />
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034313/Group_136193_rlhaiz.png"
              alt="Amex"
            />
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034379/Group_xzmsvs.png"
              alt="Apple Pay"
            />
            <img
              src="https://res.cloudinary.com/dq1rqwebs/image/upload/v1762034431/Vector_nvpzxa.png"
              alt="O Pay"
            />
          </div>

          <div className="footer-copy">
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
