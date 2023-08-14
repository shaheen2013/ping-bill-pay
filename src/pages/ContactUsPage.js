import Header from "../components/Header";
import CardSection from "../components/CardSection";
import ButtonPrimary from "../components/ButtonPrimary";
import "./ContactUsPage.css";
const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <Header
        dimensionLabel="/chevronright.svg"
        dimensionValue="/chevronright.svg"
        propLeft="calc(50% - 960px)"
        propColor="#2e3646"
        propColor1="#2e3646"
      />
      <CardSection
        dimensions="/group-40.svg"
        propTop="89rem"
        propOverflow="hidden"
      />
      <div className="vector-parent">
        <img className="vector-icon2" alt="" src="/vector14.svg" />
        <div className="frame-parent33">
          <div className="frame-parent34">
            <div className="let-us-contact-you-parent">
              <div className="let-us-contact">Let Us Contact You!</div>
              <div className="fill-out-our">
                Fill out our contact form and our team will be in touch soon to
                discuss how we can make your idea a reality.
              </div>
            </div>
            <div className="background-x5f-01-4-parent">
              <img
                className="background-x5f-01-4-icon"
                alt=""
                src="/background-x5f-01-4.svg"
              />
              <img className="letter-icon" alt="" src="/letter.svg" />
              <img className="phone-icon" alt="" src="/phone.svg" />
              <div className="smartphone-1-">
                <img className="details-13-icon" alt="" src="/details-13.svg" />
                <img className="group-icon1" alt="" src="/group8.svg" />
                <img className="camera-10-icon" alt="" src="/camera-10.svg" />
                <img className="dynamic-10-icon" alt="" src="/dynamic-10.svg" />
                <img className="vector-icon3" alt="" src="/vector15.svg" />
                <img className="vector-icon4" alt="" src="/vector16.svg" />
                <img className="vector-icon5" alt="" src="/vector17.svg" />
                <div className="group1">
                  <div className="name">CONTACT US</div>
                </div>
                <div className="group2">
                  <div className="name">NAME</div>
                </div>
                <div className="group3">
                  <div className="name">E-MAIL</div>
                </div>
                <div className="group4">
                  <div className="name">MESSAGE</div>
                </div>
              </div>
              <img className="flowerpot-3-icon" alt="" src="/flowerpot-3.svg" />
              <img className="man-6-icon" alt="" src="/man-6.svg" />
            </div>
          </div>
          <div className="group-div">
            <div className="rectangle-parent">
              <div className="frame-child8" />
              <div className="frame-parent35">
                <div className="fill-the-form-for-a-free-consu-parent">
                  <div className="fill-the-form-container">
                    <p className="fill-the-form">{`Fill the form for a free consultation with `}</p>
                    <p className="our-experts">our Experts!</p>
                  </div>
                  <div className="frame-parent36">
                    <div className="name-wrapper">
                      <div className="email">Name</div>
                    </div>
                    <div className="email-wrapper">
                      <div className="email">Email</div>
                    </div>
                    <div className="message-wrapper">
                      <div className="email">Message</div>
                    </div>
                    <div className="phone-wrapper">
                      <div className="email">Phone</div>
                    </div>
                  </div>
                </div>
                <ButtonPrimary
                  text="Submit"
                  buttonPrimaryPosition="unset"
                  buttonPrimaryBackgroundColor="#41b79b"
                  buttonPrimaryPadding="0.75rem 1.5rem"
                  buttonPrimaryWidth="10.29rem"
                  textFontSize="1rem"
                  textLineHeight="1.5rem"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
