import { useMemo } from 'react';
import './CardSection1.css';
import { Link } from 'react-router-dom';

const CardSection1 = ({
  dimensionCode,
  dimensionCodeText,
  propPosition,
  propFlexShrink,
  propBottom,
  propLeft,
  propTop,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: propPosition,
      flexShrink: propFlexShrink,
      bottom: propBottom,
      left: propLeft,
      top: propTop,
    };
  }, [propPosition, propFlexShrink, propBottom, propLeft, propTop]);

  return (
    <div className="frame-parent37  border-red-500 w-full" style={frameDivStyle}>
      <div className="container-parent">
        <div className="container1">
          <div className="content2">
            <div className="logo-and-supporting-text">
              <img className="logo-icon" alt="" src="/logo@2x.png" />
              <div className="supporting-text6">
                Ping Bill Pay offers the safest, simplest, fastest and most convenient mobile top-up service for all
                major domestic and international wireless carriers.
              </div>
            </div>
            <div className="item-2">
              <div className="policy">Policy</div>
              <div className="text-parent4">
                <Link to="/privacy-policy">
                  <div className="text8">Privacy Policy</div>
                </Link>
                <Link to="/refund">
                  <div className="text8">Refunds</div>
                </Link>
                <Link to="/terms-condition">
                  <div className="text8">Terms/Conditions</div>
                </Link>
                <Link to="/dmca">
                  <div className="text8">DMCA</div>
                </Link>
              </div>
            </div>
            <div className="item-2">
              <div className="policy">Features</div>
              <div className="text-parent4">
                <div className="text8">Why Choose</div>
                <div className="text8">How it work</div>
                <div className="text14">FAQ</div>
              </div>
            </div>
            <div className="app-store-actions mr-7">
              <div className="heading34">Social Media</div>
              <div />
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="content3">
            <div className="footer-text">Copyright 2023 © Pingbillpay.</div>
            <div className="social-icons">
              {/* <img className="social-icon" alt="" src="/social-icon.svg" />
              <img className="social-icon" alt="" src="/social-icon.svg" />
              <img className="social-icon" alt="" src="/social-icon.svg" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="actions-parent ">
        <div className="actions2">
          <img className="vector-icon30" alt="" src="/vector.svg" />
        </div>
        <img className="group-icon9" alt="" src="/group.svg" />
        <img className="group-icon9" alt="" src="/group-401.svg" />
        <img className="group-icon9" alt="" src="/linkedin1.svg" />
      </div>
    </div>
  );
};

export default CardSection1;
