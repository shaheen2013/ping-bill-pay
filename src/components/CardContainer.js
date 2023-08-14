import { useMemo } from "react";
import "./CardContainer.css";
const CardContainer = ({
  iconImageUrl,
  featureImageUrl,
  retailerOnboardingText,
  propBackgroundColor,
}) => {
  const content1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="content13" style={content1Style}>
      <img className="icon15" alt="" src={iconImageUrl} />
      <div className="text-and-supporting-text3">
        <div className="text47">{featureImageUrl}</div>
        <div className="supporting-text14">{retailerOnboardingText}</div>
      </div>
    </div>
  );
};

export default CardContainer;
