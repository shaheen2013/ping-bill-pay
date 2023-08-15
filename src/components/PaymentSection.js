import './PaymentSection.css';

const PaymentSection = ({ imageDimensions }) => {
  return (
    <div className="vector-group">
      <img className="vector-icon7" alt="" src="/vector1.svg" />
      <div className="our-convenient-online-payment-parent">
        <div className="our-convenient-online">Our Convenient Online Payment Platform</div>
        <div className="ping-utilizes-its-container">
          <span>Ping</span>
          <span className="utilizes-its-current">{` utilizes its current capabilities and network to establish an omni-channel distribution of mobile and wireless services catering to prepaid customers. Partnering with `}</span>
          <span>Ping</span>
          <span className="utilizes-its-current">
            , who has expertise in scaling relevant businesses, presents an immediate growth opportunity for your
            company.
          </span>
        </div>
      </div>
      <div className="group-parent1">
        <img className="group-child" alt="" src={imageDimensions} />
        <div className="vector-container">
          <img className="group-child" alt="" src="/vector2.svg" />
          <img className="vector-icon9" alt="" src="/vector3.svg" />
          <div className="consumer-financing1">Consumer Financing</div>
        </div>
        <div className="vector-parent1">
          <img className="group-child" alt="" src="/vector2.svg" />
          <img className="vector-icon9" alt="" src="/vector3.svg" />
          <div className="marketplace1">Marketplace</div>
        </div>
        <div className="vector-parent2">
          <img className="group-child" alt="" src="/vector2.svg" />
          <img className="vector-icon9" alt="" src="/vector3.svg" />
          <div className="rent-payments1">Rent Payments</div>
        </div>
        <div className="vector-parent3">
          <img className="group-child" alt="" src="/vector2.svg" />
          <img className="vector-icon9" alt="" src="/vector3.svg" />
          <div className="mobile-top-ups">
            <p className="mobile">Mobile</p>
            <p className="mobile">Top-Ups</p>
          </div>
        </div>
        <div className="vector-parent4">
          <img className="group-child" alt="" src="/vector4.svg" />
          <img className="vector-icon17" alt="" src="/vector5.svg" />
          <div className="insurance1">Insurance</div>
        </div>
        <div className="vector-parent5">
          <img className="group-child" alt="" src="/vector4.svg" />
          <img className="vector-icon17" alt="" src="/vector5.svg" />
          <div className="tv-internet">{`TV & Internet`}</div>
        </div>
        <div className="vector-parent6">
          <img className="group-child" alt="" src="/vector4.svg" />
          <img className="vector-icon17" alt="" src="/vector5.svg" />
          <div className="bill-pay">Bill Pay</div>
        </div>
        <div className="vector-parent7">
          <img className="group-child" alt="" src="/vector4.svg" />
          <img className="vector-icon17" alt="" src="/vector5.svg" />
          <div className="activations1">Activations</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
