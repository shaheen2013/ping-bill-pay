import { useMemo } from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import "./Header.css";
const Header = ({
  dimensionLabel,
  dimensionValue,
  propLeft,
  propColor,
  propColor1,
}) => {
  const headerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const text2Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const text3Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className="header" style={headerStyle}>
      <img className="background3-2-icon" alt="" src="/background3-2@2x.png" />
      <div className="frame-parent38">
        <div className="component-2-parent">
          <div className="text-wrapper">
            <div
              className="text15"
              style={text2Style}
            >{`Products & Features`}</div>
            <img className="chevron-right-icon" alt="" src={dimensionLabel} />
          </div>
          <div className="text-wrapper">
            <div className="text15">Case Studies</div>
          </div>
          <div className="text-wrapper">
            <div className="text15" style={text3Style}>
              Resources
            </div>
            <img className="chevron-right-icon" alt="" src={dimensionValue} />
          </div>
        </div>
        <div className="component-2-parent">
          <ButtonPrimary
            text="Sign up for free"
            buttonPrimaryPosition="unset"
            buttonPrimaryBackgroundColor="#41b79b"
            buttonPrimaryPadding="0.75rem 1.5rem"
            buttonPrimaryWidth="unset"
            textFontSize="1rem"
            textLineHeight="1.5rem"
          />
          <ButtonSecondary
            buttonSecondaryPosition="unset"
            buttonSecondaryBorder="1px solid #41b79b"
            buttonSecondaryPadding="0.75rem 1.5rem"
            textFontSize="1rem"
            textLineHeight="1.5rem"
            textColor="#41b79b"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
