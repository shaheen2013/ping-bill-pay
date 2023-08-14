import "./CardContainer1.css";
const CardContainer1 = ({
  featureIconUrl,
  featureDescription,
  onboardingDescription,
  featureImageUrl,
  featureSizeFeatureDetails,
  paymentSettlementsImageUr,
  componentIconUrl,
  sectionTitle,
  activationIntakeImageUrl,
}) => {
  return (
    <div className="content-parent">
      <div className="content8">
        <img className="icon6" alt="" src={featureIconUrl} />
        <div className="text-and-supporting-text">
          <div className="text31">{featureDescription}</div>
          <div className="supporting-text10">
            <span>{onboardingDescription}</span>
            <span className="learn-more">Learn More</span>
          </div>
        </div>
      </div>
      <div className="content8">
        <img className="icon6" alt="" src={featureImageUrl} />
        <div className="text-and-supporting-text">
          <div className="text31">{featureSizeFeatureDetails}</div>
          <div className="supporting-text10">
            <span>{paymentSettlementsImageUr}</span>
            <span className="learn-more">Learn More</span>
          </div>
        </div>
      </div>
      <div className="content8">
        <img className="icon6" alt="" src={componentIconUrl} />
        <div className="text-and-supporting-text">
          <div className="text31">{sectionTitle}</div>
          <div className="supporting-text10">
            <span>{activationIntakeImageUrl}</span>
            <span className="learn-more">Learn More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer1;
