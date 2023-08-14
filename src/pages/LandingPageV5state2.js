import Header from '../components/Header';
import PrepaidEcosystemAccessSection from '../components/PrepaidEcosystemAccessSection';
import PaymentSection from '../components/PaymentSection';
import CustomerServiceSection from '../components/CustomerServiceSection';
import BusinessManagementSection1 from '../components/BusinessManagementSection1';
import ContainerIndustries from '../components/ContainerIndustries';
import QuoteCard from '../components/QuoteCard';
import SectionCard1 from '../components/SectionCard1';
import CardSection from '../components/CardSection';
import FastAndEasyEnrollmentSection from '../components/FastAndEasyEnrollmentSection';
import SeamlessAutoSettlementsSection from '../components/SeamlessAutoSettlementsSection';
import './LandingPageV5state2.css';
const LandingPageV5state2 = () => {
  return (
    <div className="landing-page-v5state-2">
      <Header
        dimensionLabel="/chevronright.svg"
        dimensionValue="/chevronright1.svg"
        propLeft="calc(50% - 960px)"
        propColor="#2e3646"
        propColor1="#41b79b"
      />
      <PrepaidEcosystemAccessSection />
      <PaymentSection imageDimensions="/group-18.svg" />
      <CustomerServiceSection
        customerServiceDescriptio="Our customer service team is a dedicated and proficient group of professionals committed to delivering exceptional support and assistance to our valued customers. With a deep understanding of our products and services, they are well-equipped to address inquiries, resolve issues, and provide guidance promptly and courteously. Whether through phone, email, or online chat, our customer service."
        propTop="calc(50% - 222px)"
      />
      <BusinessManagementSection1 />
      <ContainerIndustries dimensionCode="/vector13.svg" />
      <div className="client-say1">
        <img className="vector-icon1" alt="" src="/vector7.svg" />
        <div className="customer-testimonials-group">
          <div className="customer-testimonials1">Customer Testimonials</div>
          <div className="what-our-clients-container1">
            <p className="what-our-clients1">What Our Clients</p>
            <p className="what-our-clients1">are Saying?</p>
          </div>
          <div className="the-client-can1">
            The client can evaluate the level of customer service provided by Ping Bill Pay.
          </div>
          <div className="frame-parent28">
            <div className="parent1">
              <div className="div2">1200+</div>
              <div className="full-5-star1">Full 5 Star Reviews</div>
            </div>
            <div className="parent1">
              <div className="div2">4.9</div>
              <div className="full-5-star1">{`Out of 5 Average Rating `}</div>
            </div>
          </div>
        </div>
        <div className="frame-parent29">
          <div className="frame-wrapper7">
            <div className="quote-and-stars-parent1">
              <QuoteCard
                dimensionLabel="/star-icon1.svg"
                dimensionCode="/star-icon1.svg"
                dimensionValue="/star-icon1.svg"
                dimensionDescription="/star-icon1.svg"
                dimensionText="/star-icon1.svg"
                customerReviewText="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
                propColor="#fff"
              />
              <div className="frame-child2" />
              <div className="frame-parent30">
                <div className="ellipse-parent1">
                  <img className="frame-child3" alt="" src="/ellipse-1917@2x.png" />
                  <div className="text-parent1">
                    <b className="text5">Renee Wells</b>
                    <div className="supporting-text3">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="wrapper1">
                  <img className="icon3" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper8">
            <div className="quote-and-stars-parent2">
              <QuoteCard
                dimensionLabel="/star-icon2.svg"
                dimensionCode="/star-icon2.svg"
                dimensionValue="/star-icon2.svg"
                dimensionDescription="/star-icon2.svg"
                dimensionText="/star-icon2.svg"
                customerReviewText={`I'm beyond satisfied with Ping Bill Pay! It has revolutionized the way I service my customers. The platform is fast, secure, and offers a wide range of mobile carriers to choose from."`}
                propColor="#2f3a46"
              />
              <div className="frame-child4" />
              <div className="frame-parent31">
                <div className="ellipse-parent2">
                  <img className="frame-child3" alt="" src="/ellipse-19171@2x.png" />
                  <div className="text-parent1">
                    <b className="text5">Renee Wells</b>
                    <div className="supporting-text4">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="wrapper2">
                  <img className="icon3" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="quote-and-stars-parent1">
              <QuoteCard
                dimensionLabel="/star-icon1.svg"
                dimensionCode="/star-icon1.svg"
                dimensionValue="/star-icon1.svg"
                dimensionDescription="/star-icon1.svg"
                dimensionText="/star-icon1.svg"
                customerReviewText="Love the simplicity of the service and the prompt customer support. We can’t imagine working without it."
                propColor="#fff"
              />
              <div className="frame-child2" />
              <div className="frame-parent30">
                <div className="ellipse-parent1">
                  <img className="frame-child3" alt="" src="/ellipse-1917@2x.png" />
                  <div className="text-parent1">
                    <div className="text7">Renee Wells</div>
                    <div className="supporting-text3">Product Designer, Quotient</div>
                  </div>
                </div>
                <div className="wrapper1">
                  <img className="icon3" alt="" src="/.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionCard1 />
      <CardSection dimensions="/group-402.svg" propTop="421.94rem" propOverflow="hidden" />
      {/* <div className="about-us-parent">
        <div className="about-us">About us</div>
        <div className="about-us">Contact us</div>
        <div className="about-us">Support</div>
        <div className="about-us">Become a Reseller</div>
      </div> */}
      <FastAndEasyEnrollmentSection formDescription="Start by completing the online registration process through the Sign up for free link." />
      <SeamlessAutoSettlementsSection />
    </div>
  );
};

export default LandingPageV5state2;
