import './ContainerIndustries.css';

const ContainerIndustries = ({ dimensionCode }) => {
  return (
    <div className="frame-parent50">
      <div className="industries-wrapper">
        <div className="industries">Industries</div>
      </div>
      <div className="frame-parent51">
        <div className="frame-parent52">
          <div className="money-parent">
            <img className="frame-child13" alt="" src="/group-66.svg" />
            <div className="text34">Gas Stations</div>
          </div>
          <div className="vector-parent8">
            <img className="vector-icon24" alt="" src={dimensionCode} />
            <div className="text35">Travel Agency</div>
          </div>
        </div>
        <div className="frame-parent53">
          <div className="money-parent">
            <img className="money-icon" alt="" src="/003money.svg" />
            <div className="text35">Check Cashing Outlets</div>
          </div>
          <div className="vector-parent8">
            <img className="group-icon4" alt="" src="/group2.svg" />
            <div className="text35">Laundromats</div>
          </div>
        </div>
        <div className="frame-parent54">
          <div className="money-parent">
            <img className="group-icon5" alt="" src="/group3.svg" />
            <div className="text35">Wireless Stores</div>
          </div>
          <div className="group-parent5">
            <img className="group-icon6" alt="" src="/group4.svg" />
            <div className="text35">Repair Stores</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerIndustries;
