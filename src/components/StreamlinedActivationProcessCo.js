import "./StreamlinedActivationProcessCo.css";
const StreamlinedActivationProcessCo = ({
  setupProcessDescription,
  deviceActivationCode,
}) => {
  return (
    <div className="ellipse-parent8">
      <div className="frame-child22" />
      <div className="streamlined-activation-process-parent">
        <div className="streamlined-activation-process">
          Streamlined Activation Process
        </div>
        <div className="the-vape-store1">{setupProcessDescription}</div>
      </div>
      <img className="vector-icon26" alt="" src={deviceActivationCode} />
    </div>
  );
};

export default StreamlinedActivationProcessCo;
