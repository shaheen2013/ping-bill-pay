import CardContainer from "./CardContainer";
import "./BusinessManagementSection1.css";
const BusinessManagementSection1 = () => {
  return (
    <div className="frame-parent87">
      <div className="frame-child34" />
      <div className="broad-range-of-features-to-ass-group">
        <div className="broad-range-of1">
          Broad Range of Features to Assist you in Managing your Business
        </div>
        <div className="frame-parent88">
          <div className="content-group">
            <CardContainer
              iconImageUrl="/icon.svg"
              featureImageUrl="Multi Store Management"
              retailerOnboardingText="Efficiently onboard retailer locations, ensuring a seamless integration into our.."
            />
            <div className="content14">
              <img className="icon16" alt="" src="/icon1.svg" />
              <div className="text-and-supporting-text4">
                <div className="text48">Payment Clearing</div>
                <div className="supporting-text15">
                  <span>{`Our advanced system automates payment settlements across a multi-tier... `}</span>
                  <span className="learn-more3">Learn More</span>
                </div>
              </div>
            </div>
            <CardContainer
              iconImageUrl="/icon2.svg"
              featureImageUrl="New Order Processing"
              retailerOnboardingText="Efficiently handle activation intake and fulfillment management..."
              propBackgroundColor="rgba(51, 167, 140, 0.1)"
            />
          </div>
          <div className="content-container">
            <CardContainer
              iconImageUrl="/icon3.svg"
              featureImageUrl="Custom Reports and BI"
              retailerOnboardingText="Easily track and manage performance throughout your distribution..."
              propBackgroundColor="rgba(51, 167, 140, 0.1)"
            />
            <CardContainer
              iconImageUrl="/icon4.svg"
              featureImageUrl={`Training & Support`}
              retailerOnboardingText="Our platform offers a seamless onboarding experience with streamlined... "
              propBackgroundColor="rgba(51, 167, 140, 0.1)"
            />
            <CardContainer
              iconImageUrl="/icon5.svg"
              featureImageUrl=" Other Benefits"
              retailerOnboardingText="Unlock the full potential of your business with our services, including custom.."
              propBackgroundColor="rgba(51, 167, 140, 0.1)"
            />
          </div>
          <div className="content15">
            <img className="icon16" alt="" src="/icon1.svg" />
            <div className="text-and-supporting-text4">
              <div className="text48">Payment Clearing</div>
              <div className="supporting-text15">
                Our advanced system automates payment settlements across a
                multi-tier distribution network while allowing you to customize
                commissions based on specific products and retailers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessManagementSection1;
