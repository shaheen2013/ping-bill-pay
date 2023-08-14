import CardContainer1 from "./CardContainer1";
import "./BusinessManagementSection.css";
const BusinessManagementSection = () => {
  return (
    <div className="frame-parent48">
      <div className="frame-child12" />
      <div className="broad-range-of-features-to-ass-parent">
        <div className="broad-range-of">
          Broad Range of Features to Assist you in Managing your Business
        </div>
        <div className="frame-parent49">
          <CardContainer1
            featureIconUrl="/icon.svg"
            featureDescription="Multi Store Management"
            onboardingDescription="Efficiently onboard retailer locations, ensuring a seamless integration into our... "
            featureImageUrl="/icon1.svg"
            featureSizeFeatureDetails="Payment Clearing"
            paymentSettlementsImageUr="Our advanced system automates payment settlements across a multi-tier... "
            componentIconUrl="/icon2.svg"
            sectionTitle="New Order Processing"
            activationIntakeImageUrl="Efficiently handle activation intake and fulfillment management... "
          />
          <CardContainer1
            featureIconUrl="/icon3.svg"
            featureDescription="Custom Reports and BI"
            onboardingDescription="Easily track and manage performance throughout your distribution... "
            featureImageUrl="/icon4.svg"
            featureSizeFeatureDetails={`Training & Support`}
            paymentSettlementsImageUr="Our platform offers a seamless onboarding experience with streamlined... "
            componentIconUrl="/icon5.svg"
            sectionTitle=" Other Benefits"
            activationIntakeImageUrl="Unlock the full potential of your business with our services, including custom... "
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessManagementSection;
