import BusinessManagementSection from '../components/BusinessManagementSection';
import CardSection1 from '../components/CardSection1';
import ContainerIndustries from '../components/ContainerIndustries';
import CustomerServiceSection from '../components/CustomerServiceSection';
import FastAndEasyEnrollmentSection from '../components/FastAndEasyEnrollmentSection';
import Header from '../components/Header';
import PaymentSection from '../components/PaymentSection';
import PrepaidEcosystemAccessSection from '../components/PrepaidEcosystemAccessSection';
import QuoteCard from '../components/QuoteCard';
import SeamlessAutoSettlementsSection from '../components/SeamlessAutoSettlementsSection';
import SectionCard1 from '../components/SectionCard1';
import './LandingPageProductFeature.css';

const LandingPageProductFeature = () => {
  return (
    <div className="landing-page-product-feature">
      <Header
        dimensionLabel="/chevronright1.svg"
        dimensionValue="/chevronright.svg"
        propLeft="calc(50% - 960px)"
        propColor="#41b79b"
        propColor1="#2e3646"
      />
      <PrepaidEcosystemAccessSection />
      <PaymentSection imageDimensions="/group-19.svg" />
      <CustomerServiceSection customerServiceDescriptio="Our customer service team is a dedicated and proficient group of professionals committed to delivering exceptional support and assistance to our valued customers. With a deep understanding of our products and services, they are well-equipped to address inquiries, resolve issues, and provide guidance promptly and courteously. " />
      <BusinessManagementSection />
      <ContainerIndustries dimensionCode="/vector6.svg" />
      <div className="client-say">
        <img className="vector-icon" alt="" src="/vector7.svg" />
        <div className="customer-testimonials-parent">
          <div className="customer-testimonials">Customer Testimonials</div>
          <div className="what-our-clients-container">
            <p className="what-our-clients">What Our Clients</p>
            <p className="what-our-clients">are Saying?</p>
          </div>
          <div className="the-client-can">
            The client can evaluate the level of customer service provided by the business
          </div>
          <div className="frame-parent5">
            <div className="parent">
              <div className="div">1200+</div>
              <div className="full-5-star">Full 5 Star Reviews</div>
            </div>
            <div className="parent">
              <div className="div">4.9</div>
              <div className="full-5-star">{`Out of 5 Average Rating `}</div>
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="frame-wrapper2">
            <div className="quote-and-stars-parent">
              <QuoteCard
                dimensionLabel="/star-icon1.svg"
                dimensionCode="/star-icon1.svg"
                dimensionValue="/star-icon1.svg"
                dimensionDescription="/star-icon1.svg"
                dimensionText="/star-icon1.svg"
                customerReviewText="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
              />
              <div className="frame-child" />
              <div className="frame-parent7">
                <div className="ellipse-parent">
                  <img className="frame-item" alt="" src="/ellipse-1917@2x.png" />
                  <div className="text-parent">
                    <b className="text2">Renee Wells</b>
                    <div className="supporting-text">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="wrapper">
                  <img className="icon" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="quote-and-stars-group">
              <QuoteCard
                dimensionLabel="/star-icon2.svg"
                dimensionCode="/star-icon2.svg"
                dimensionValue="/star-icon2.svg"
                dimensionDescription="/star-icon2.svg"
                dimensionText="/star-icon2.svg"
                customerReviewText={`I'm beyond satisfied with Ping Bill Pay! It has revolutionized the way I service my customers. The platform is fast, secure, and offers a wide range of mobile carriers to choose from."`}
                propColor="#2f3a46"
              />
              <div className="frame-inner" />
              <div className="frame-parent8">
                <div className="ellipse-group">
                  <img className="frame-item" alt="" src="/ellipse-19171@2x.png" />
                  <div className="text-parent">
                    <b className="text2">Renee Wells</b>
                    <div className="supporting-text1">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="container">
                  <img className="icon" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper4">
            <div className="quote-and-stars-parent">
              <QuoteCard
                dimensionLabel="/star-icon1.svg"
                dimensionCode="/star-icon1.svg"
                dimensionValue="/star-icon1.svg"
                dimensionDescription="/star-icon1.svg"
                dimensionText="/star-icon1.svg"
                customerReviewText="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
                propColor="#fff"
              />
              <div className="frame-child" />
              <div className="frame-parent7">
                <div className="ellipse-parent">
                  <img className="frame-item" alt="" src="/ellipse-1917@2x.png" />
                  <div className="text-parent">
                    <div className="text4">Renee Wells</div>
                    <div className="supporting-text">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="wrapper">
                  <img className="icon" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionCard1 />
      <CardSection1
        dimensionCode="/group-402.svg"
        dimensionCodeText="/linkedin1.svg"
        propPosition="absolute"
        propFlexShrink="unset"
        propBottom="unset"
        propLeft="calc(50% - 960px)"
        propTop="421.94rem"
      />
      <FastAndEasyEnrollmentSection formDescription="To begin, fill out our straightforward online form. We only ask for essential information, making the processfast and efficient." />
      <SeamlessAutoSettlementsSection />
      <div className="frame-parent10">
        <div className="products-parent">
          <div className="products">Products</div>
          <div className="top-ups-parent">
            <div className="top-ups">Top-Ups</div>
            <div className="activations">Activations</div>
            <div className="top-ups">Bill Payments</div>
            <div className="top-ups">TV/Internet</div>
            <div className="top-ups">Rent Payments</div>
            <div className="top-ups">Marketplace</div>
            <div className="top-ups">Consumer Financing</div>
            <div className="top-ups">Insurance</div>
          </div>
        </div>
        <div className="products-parent">
          <div className="products">Features</div>
          <div className="top-ups-parent">
            <div className="top-ups">Multi Store Management</div>
            <div className="top-ups">Auto Commission Settlements</div>
            <div className="top-ups">Simple Order Processing</div>
            <div className="top-ups">{`Custom Reporting & BI`}</div>
            <div className="top-ups">Order Inventory</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageProductFeature;
