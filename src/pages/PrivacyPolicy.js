import CardSection1 from '../components/CardSection1';
import Header from '../components/Header';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy-parent  border-red-500 w-full">
        <div className="privacy-policy1">Privacy Policy</div>
        <div className="frame-wrapper">
          <div className="frame-div">
            <div className="content-item6">
              <div className="heading3">Privacy Policy for pingbillpay.com</div>
            </div>
            <div className="content-item7">
              <div className="heading-parent">
                <div className="heading4">Effective Date: 08/01/2023</div>
                <div className="paragraph3">
                  At Ping Bill Pay, we value your privacy and are committed to protecting your personal information.
                  This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our
                  mobile bill pay top-up website. By using our website, you consent to the practices described in this
                  policy.
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">1. Information We Collect:</div>
                <div className="paragraph3">
                  <p className="a-personal-information">
                    (a) Personal Information: When you sign up or use our services, we may collect certain personally
                    identifiable information, such as your name, email address, phone number, and billing details.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (b) Non-Personal Information: We may also collect non-personal information, including browser type,
                    device information, and anonymous usage data, to improve our website's functionality and user
                    experience.
                  </p>
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">How We Use Your Information:</div>
                <div className="paragraph3">
                  <p className="a-personal-information">
                    (a) Personalization: We use your personal information to personalize your experience and provide
                    customized top-up options based on your preferences and usage history.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (b) Payment Processing: Your billing details are collected and securely processed for facilitating
                    bill payments and top-ups.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (c) Communication: We may use your contact information to send you transactional emails, updates,
                    and promotional offers related to our services. You can opt-out of marketing communications at any
                    time.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (d) Legal Obligations: We may use and disclose your information to comply with legal requirements,
                    enforce our policies, or protect our rights, privacy, safety, or property.
                  </p>
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">3. Data Security:</div>
                <div className="paragraph3">
                  <p className="a-personal-information">
                    (a) Encryption: We use industry-standard encryption methods to protect your personal and financial
                    information during transmission and storage.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (b) Secure Access: Access to your personal data is limited to authorized personnel only, who are
                    bound by confidentiality obligations.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (c) Third-Party Vendors: We work with trusted third-party vendors to process payments and provide
                    services. We ensure they adhere to strict security standards and only use your data for the intended
                    purposes.
                  </p>
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">4. Cookies and Tracking:</div>
                <div className="paragraph3">
                  <p className="a-personal-information">
                    (a) Cookies: Our website may use cookies and similar technologies to collect non-personal
                    information about your browsing behavior. You can adjust your browser settings to manage cookie
                    preferences.
                  </p>
                  <p className="a-personal-information">&nbsp;</p>
                  <p className="a-personal-information">
                    (b) Third-Party Analytics: We may use third-party analytics tools to analyze website usage, but this
                    data is anonymized and does not contain personally identifiable information.
                  </p>
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">5. Third-Party Links:</div>
                <div className="paragraph3">
                  Our website may contain links to external websites. We are not responsible for their privacy practices
                  and encourage you to review their privacy policies separately.
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">6. Children's Privacy:</div>
                <div className="paragraph3">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If you believe a child has provided us with their data, please
                  contact us to have it removed.
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">7. Changes to the Privacy Policy:</div>
                <div className="paragraph3">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
                  effective date will be revised accordingly. We encourage you to review the policy periodically.
                </div>
              </div>
              <div className="heading-parent">
                <div className="heading4">8. Contact Us:</div>
                <div className="paragraph3">
                  If you have any questions, concerns, or requests regarding your personal information, please contact
                  us at info@pingbillpay.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardSection1
          dimensionCode="/group-401.svg"
          dimensionCodeText="/linkedin.svg"
          propPosition="relative"
          propFlexShrink="0"
          propBottom="unset"
          propLeft="unset"
          propTop="unset"
        />
      </div>
      <Header
        dimensionLabel="/chevronright.svg"
        dimensionValue="/chevronright.svg"
        propLeft="0rem"
        propColor="#2e3646"
        propColor1="#2e3646"
      />
      <img className="privacy-policy-child" alt="" src="/group-48.svg" />
      <img className="privacy-policy-item" alt="" src="/group-48.svg" />
    </div>
  );
};

export default PrivacyPolicy;
