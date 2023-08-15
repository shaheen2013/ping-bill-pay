import { useMemo, useState } from 'react';
import './CardContainer.css';

const CardContainer = ({ iconImageUrl, featureImageUrl, retailerOnboardingText, propBackgroundColor, fullText }) => {
  const content1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`content13 ${isHovered ? 'hovered' : ''}`}
      style={content1Style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="icon15" alt="" src={iconImageUrl} />
      <div className="text-and-supporting-text3">
        <div className="text47">{featureImageUrl}</div>
        <div className={`supporting-text14`}>{isHovered ? fullText : retailerOnboardingText}</div>
      </div>
    </div>
  );
};

export default CardContainer;
