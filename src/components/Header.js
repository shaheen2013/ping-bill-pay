import { useLocation } from 'react-router';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isCaseStudiesActive = location.pathname === '/all-case-study-v2';

  return (
    <div className="header  border-red-500">
      <img className="background3-2-icon" alt="" src="/background3-2@2x.png" />
      <div className="frame-parent38">
        <div className="component-2-parent">
          <div className="text-wrapper">
            <div className="dropdown">
              <span className="text15">Products & Features</span>
              <img className="chevron-right-icon" alt="" src={'/chevronright.svg'} />
              <div className="dropdown-content">
                <div className="dropdown-frame">
                  <div className="products-parent">
                    <div className="products">Products</div>
                    <div className="top-ups-parent">
                      <div className="top-ups">Top-Ups</div>
                      <div className="activations">Activations</div>
                      <div className="top-ups">Bill Payments</div>
                      <div className="top-ups">TV/Internet</div>
                      <div className="top-ups">Rent Payments</div>
                      <div className="top-ups">Marketplace</div>
                      <div className="top-ups">Consumer Financing</div>
                      <div className="top-ups">Insurance</div>
                    </div>
                  </div>
                  <div className="products-parent">
                    <div className="products">Features</div>
                    <div className="top-ups-parent">
                      <div className="top-ups">Multi Store Management</div>
                      <div className="top-ups">Auto Commission Settlements</div>
                      <div className="top-ups">Simple Order Processing</div>
                      <div className="top-ups">{`Custom Reporting & BI`}</div>
                      <div className="top-ups">Order Inventory</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-wrapper">
            <a href="/all-case-study-v2" className={`text15 ${isCaseStudiesActive ? 'open' : ''}`}>
              Case Studies
            </a>
          </div>

          <div className="text-wrapper">
            <div className="dropdown">
              <span className="text15">Resources</span>
              <img className="chevron-right-icon" alt="" src={'/chevronright.svg'} />
              <div className="dropdown-content">
                <div className="about-us-frame">
                  <a href="/about-us-page" className="about-us-child hover:text-blue-700">
                    About us
                  </a>
                  <a href="/contact-us-page" className="about-us-child hover:text-blue-700">
                    Contact us
                  </a>
                  <div className="about-us-child">Support</div>
                  <div className="about-us-child">Become a Reseller</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="component-2-parent">
          <ButtonPrimary
            text="Sign up for free"
            buttonPrimaryPosition="unset"
            buttonPrimaryBackgroundColor="#41b79b"
            buttonPrimaryPadding="0.75rem 1.5rem"
            buttonPrimaryWidth="unset"
            textFontSize="1rem"
            textLineHeight="1.5rem"
          />
          <ButtonSecondary
            buttonSecondaryPosition="unset"
            buttonSecondaryBorder="1px solid #41b79b"
            buttonSecondaryPadding="0.75rem 1.5rem"
            textFontSize="1rem"
            textLineHeight="1.5rem"
            textColor="#41b79b"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
