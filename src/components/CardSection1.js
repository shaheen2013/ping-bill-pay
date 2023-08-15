import { useMemo } from 'react';
import './CardSection1.css';

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
                <div className="text8">Privacy Policy</div>
                <div className="text8">Refunds</div>
                <div className="text8">Terms/Conditions</div>
                <div className="text8">DMCA</div>
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
            <div className="app-store-actions">
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
      <div className="actions-parent">
        <div className="actions">
          <img className="vector-icon6" alt="" src="/vector.svg" />
        </div>
        <img className="linkedin-icon" alt="" src="/group.svg" />
        <img className="linkedin-icon" alt="" src={dimensionCode} />
        <img className="linkedin-icon" alt="" src={dimensionCodeText} />
      </div>
    </div>
  );
};

export default CardSection1;
