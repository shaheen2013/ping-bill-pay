import './BillPaymentServicesContainer1.css';

const BillPaymentServicesContainer1 = ({ paymentServiceDescription, storePaymentServices, paymentServiceIconUrl }) => {
  return (
    <div className="ellipse-parent13">
      <div className="frame-child28" />
      <div className="bill-payment-services-parent">
        <div className="bill-payment-services">{paymentServiceDescription}</div>
        <div className="swift-integrated-bill">{storePaymentServices}</div>
      </div>
      <img className="group-icon8" alt="" src={paymentServiceIconUrl} />
    </div>
  );
};

export default BillPaymentServicesContainer1;
