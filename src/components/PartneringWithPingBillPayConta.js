import './PartneringWithPingBillPayConta.css';

const PartneringWithPingBillPayConta = ({ mobileTopUpDescription, mobileTopUpPlans }) => {
  return (
    <div className="ellipse-parent12">
      <div className="frame-child27" />
      <div className="partnering-with-ping-bill-pay-group">
        <div className="partnering-with-ping1 text-2xl">Partnering with Ping Bill Pay</div>
        <div className="swift-strategically-collaborat text-lg">{mobileTopUpDescription}</div>
      </div>
      <img className="partners-icon1" alt="" src={mobileTopUpPlans} />
    </div>
  );
};

export default PartneringWithPingBillPayConta;
