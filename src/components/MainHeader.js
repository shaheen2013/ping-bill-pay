import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './MainHeader.css';

const MainHeader = () => {
  return (
    <div className="header1">
      <div className="background3-2" />
      <div className="frame-parent40">
        <div className="component-2-group">
          <div className="text-parent8">
            <div className="text18">{`Products & Features`}</div>
            <img className="chevron-right-icon2" alt="" src="/chevronright.svg" />
          </div>
          <div className="text-frame">
            <div className="text18">Case Studies</div>
          </div>
          <div className="text-parent8">
            <div className="text18">Resources</div>
            <img className="chevron-right-icon2" alt="" src="/chevronright.svg" />
          </div>
        </div>
        <div className="component-2-group">
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

export default MainHeader;
