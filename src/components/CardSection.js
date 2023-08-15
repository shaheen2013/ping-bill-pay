import { useMemo } from 'react';
import './CardSection.css';
import { Link } from 'react-router-dom';

const CardSection = ({ dimensions, propTop, propOverflow }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
      overflow: propOverflow,
    };
  }, [propTop, propOverflow]);

  return (
    <div className="frame-parent86" style={frameDiv3Style}>
      <div className="container-group">
        <div className="container3">
          <div className="content11">
            <div className="logo-and-supporting-text1">
              <img className="logo-icon1" alt="" src="/logo@2x.png" />
              <div className="supporting-text13">
                Ping Bill Pay offers the safest, simplest, fastest and most convenient mobile top-up service for all
                major domestic and international wireless carriers.
              </div>
            </div>
            <div className="item-21">
              <div className="policy1">Policy</div>
              <div className="text-parent11">
                <Link to="/privacy-policy">
                  <div className="text40">Privacy Policy</div>
                </Link>
                <Link to="/refund">
                  <div className="text40">Refunds</div>
                </Link>
                <Link to="/terms-condition">
                  <div className="text40">Terms/Conditions</div>
                </Link>
                <Link to="/dmca">
                  <div className="text40">DMCA</div>
                </Link>
              </div>
            </div>
            <div className="item-21">
              <div className="policy1">Features</div>
              <div className="text-parent11">
                <div className="text40">Why Choose</div>
                <div className="text40">How it work</div>
                <div className="text46">FAQ</div>
              </div>
            </div>
            <div className="app-store-actions1">
              <div className="heading38">Social Media</div>
              <div />
            </div>
          </div>
        </div>
        <div className="container4">
          <div className="content12">
            <div className="footer-text1">Copyright 2023 © Pingbillpay.</div>
          </div>
        </div>
      </div>
      <div className="actions-group">
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

export default CardSection;
