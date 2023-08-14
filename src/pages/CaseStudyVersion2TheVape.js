import ImplementationContainer from "../components/ImplementationContainer";
import Header from "../components/Header";
import CardSection1 from "../components/CardSection1";
import "./CaseStudyVersion2TheVape.css";
const CaseStudyVersion2TheVape = () => {
  return (
    <div className="case-study-version-2-the-vape">
      <div className="case-study-version-2-the-vape-inner">
        <div className="frame-parent11">
          <div className="frame-parent12">
            <div className="frame-parent13">
              <div className="frame-wrapper5">
                <div className="frame-wrapper5">
                  <div className="case-study-parent">
                    <div className="case-study">Case Study</div>
                    <div className="the-vape-stores">
                      The Vape Store's Evolution
                    </div>
                    <div className="leveraging-mobile-top-ups">
                      Leveraging Mobile Top-Ups, Bill Payments, and Activations
                      to Drive Sales and Cross-Selling Opportunities
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent14">
                <div className="frame-parent15">
                  <div className="introduction-parent">
                    <div className="introduction">Introduction</div>
                    <div className="this-case-study">
                      This case study explores the journey of The Vape Store, a
                      tobacco and vape shop, as it strategically implemented
                      mobile top-ups, bill payments, and activation services
                      into its business model.
                    </div>
                  </div>
                  <div className="by-embracing-these-innovative-wrapper">
                    <div className="by-embracing-these">
                      By embracing these innovative solutions, The Vape Store
                      experienced a significant boost sales and successfully
                      capitalized on cross-selling opportunities, establishing
                      itself as a customer-centric destination for various
                      services.
                    </div>
                  </div>
                </div>
                <img className="plant-icon" alt="" src="/plant.svg" />
              </div>
            </div>
            <div className="frame-parent16">
              <div className="background-parent">
                <div className="introduction">Background</div>
                <div className="the-vape-store">
                  The Vape Store recognized the evolving needs of its customers
                  and the changing landscape of the tobacco and vape industry.
                  As traditional tobacco sales declined and vaping gained
                  popularity, the store sought opportunities to diversify its
                  offerings and cater to a broader customer base.
                </div>
              </div>
              <div className="by-embracing-these-innovative-wrapper">
                <div className="accepting-mobile-top-ups">
                  Accepting mobile top-ups, bill payments, and activations
                  emerged as a strategic approach to meet customer demands and
                  enhance its business prospects
                </div>
              </div>
            </div>
          </div>
          <ImplementationContainer />
        </div>
      </div>
      <Header
        dimensionLabel="/chevronright.svg"
        dimensionValue="/chevronright.svg"
        propLeft="calc(50% - 960px)"
        propColor="#2e3646"
        propColor1="#2e3646"
      />
      <img
        className="case-study-version-2-the-vape-child"
        alt=""
        src="/group-48.svg"
      />
      <img
        className="case-study-version-2-the-vape-item"
        alt=""
        src="/group-48.svg"
      />
      <CardSection1
        dimensionCode="/group-404.svg"
        dimensionCodeText="/linkedin.svg"
        propPosition="absolute"
        propFlexShrink="unset"
        propBottom="0rem"
        propLeft="calc(50% - 960px)"
        propTop="unset"
      />
    </div>
  );
};

export default CaseStudyVersion2TheVape;
