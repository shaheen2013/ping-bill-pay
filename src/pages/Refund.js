import CardSection1 from "../components/CardSection1";
import Header from "../components/Header";
import "./Refund.css";
const Refund = () => {
  return (
    <div className="refund">
      <div className="refund-parent">
        <div className="refund1">Refund</div>
        <div className="frame-container">
          <div className="frame-wrapper1">
            <div className="content-item-parent1">
              <div className="content-item8">
                <div className="heading13">Refund Policy</div>
              </div>
              <div className="content-item9">
                <div className="paragraph12">
                  <p className="customer-satisfaction-is">
                    Customer satisfaction is our utmost priority here at Ping
                    Bill Pay. Rest assured, we will never charge your credit
                    card until your mobile refill or top-up is successfully
                    processed and credited to your account. Once the refill is
                    credited, please note that it cannot be reversed, making all
                    sales final with no option for refunds.
                  </p>
                  <p className="customer-satisfaction-is">&nbsp;</p>
                  <p className="customer-satisfaction-is">
                    However, if, for any reason, your top-up does not get
                    credited to your account, we guarantee a prompt refund
                    within 24 hours of the issue coming to our attention.
                  </p>
                  <p className="customer-satisfaction-is">&nbsp;</p>
                  <p className="customer-satisfaction-is">
                    <span>{`For any inquiries or clarifications about our Cancellation or Refund Policy, please feel free to reach out to us at `}</span>
                    <span className="infopingbillpaycom">
                      <span className="infopingbillpaycom1">
                        info@pingbillpay.com
                      </span>
                    </span>
                  </p>
                  <p className="customer-satisfaction-is">
                    <a
                      className="blank-line19"
                      href="mailto:support@vivabillpay.com"
                      target="_blank"
                    >
                      <span>
                        <span className="infopingbillpaycom">&nbsp;</span>
                      </span>
                    </a>
                  </p>
                  <p className="customer-satisfaction-is">
                    <span>
                      We genuinely appreciate your business and thank you for
                      choosing Ping Bill Pay!
                    </span>
                  </p>
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
      <img className="refund-child" alt="" src="/group-48.svg" />
      <img className="refund-item" alt="" src="/group-48.svg" />
    </div>
  );
};

export default Refund;
