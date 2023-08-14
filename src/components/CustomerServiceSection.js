import { useMemo } from "react";
import "./CustomerServiceSection.css";
const CustomerServiceSection = ({ customerServiceDescriptio, propTop }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="frame-parent47">
      <div
        className="customer-service-focused-on-va-parent"
        style={frameDiv1Style}
      >
        <div className="customer-service-focused">
          Customer service focused on value creation
        </div>
        <div className="our-customer-service">{customerServiceDescriptio}</div>
      </div>
      <img className="image-icon3" alt="" src="/image4.svg" />
    </div>
  );
};

export default CustomerServiceSection;
