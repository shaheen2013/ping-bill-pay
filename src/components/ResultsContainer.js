import './ResultsContainer.css';

const ResultsContainer = ({
  strategicTransformationRe,
  resellerIntegrationDescri,
  storeResultsDescription,
  swiftStoreDescription,
  productDimensions,
  businessResultsDescriptio,
  swiftDescription,
  description,
  resultDescription,
  revenueStreamDescription,
  descriptionText,
  brandImageDescription,
  brandImageDescription2,
  descriptionText2,
}) => {
  return (
    <div className="frame-parent75">
      <div className="results-group">
        <div className="results1">Results</div>
        <div className="swifts-strategic-transformati">{strategicTransformationRe}</div>
      </div>
      <div className="frame-parent76">
        <div className="frame-parent77">
          <div className="frame-parent77">
            <div className="frame-parent77">
              <div className="parent5">
                <img className="icon11" alt="" src={resellerIntegrationDescri} />
                <div className="increased-foot-traffic-parent">
                  <div className="increased-foot-traffic">{storeResultsDescription}</div>
                  <div className="the-introduction-of-container">
                    <p className="by-becoming-a">{swiftStoreDescription}</p>
                  </div>
                </div>
              </div>
              <div className="parent6">
                <img className="icon12" alt="" src={productDimensions} />
                <div className="increased-foot-traffic-parent">
                  <div className="increased-foot-traffic">{businessResultsDescriptio}</div>
                  <div className="the-introduction-of-container">
                    <p className="by-becoming-a">{swiftDescription}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="parent6">
              <img className="icon13" alt="" src={description} />
              <div className="increased-foot-traffic-parent">
                <div className="increased-foot-traffic">{resultDescription}</div>
                <div className="the-introduction-of-container">
                  <p className="by-becoming-a">{revenueStreamDescription}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="parent8">
            <img className="icon14" alt="" src={descriptionText} />
            <div className="increased-foot-traffic-parent">
              <div className="increased-foot-traffic">{brandImageDescription}</div>
              <div className="the-introduction-of-container">
                <p className="by-becoming-a">{brandImageDescription2}</p>
              </div>
            </div>
          </div>
        </div>
        <img className="speech-bubble-icon1" alt="" src={descriptionText2} />
      </div>
    </div>
  );
};

export default ResultsContainer;
