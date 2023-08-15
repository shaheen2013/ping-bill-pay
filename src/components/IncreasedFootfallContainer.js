import { useMemo } from 'react';
import './IncreasedFootfallContainer.css';

const IncreasedFootfallContainer = ({
  productDimensions,
  benefitsDescription,
  storeServicesDescription,
  propGap,
  propWidth,
  propHeight,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const iconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="parent3" style={frameDiv2Style}>
      <img className="icon9" alt="" src={productDimensions} style={iconStyle} />
      <div className="increased-footfall-parent">
        <div className="increased-footfall">{benefitsDescription}</div>
        <div className="the-introduction-of">{storeServicesDescription}</div>
      </div>
    </div>
  );
};

export default IncreasedFootfallContainer;
