import { useMemo } from 'react';
import './ButtonSecondary.css';

const ButtonSecondary = ({
  buttonSecondaryPosition,
  buttonSecondaryBorder,
  buttonSecondaryPadding,
  textFontSize,
  textLineHeight,
  textColor,
}) => {
  const buttonSecondaryStyle = useMemo(() => {
    return {
      position: buttonSecondaryPosition,
      border: buttonSecondaryBorder,
      padding: buttonSecondaryPadding,
    };
  }, [buttonSecondaryPosition, buttonSecondaryBorder, buttonSecondaryPadding]);

  const textStyle = useMemo(() => {
    return {
      fontSize: textFontSize,
      lineHeight: textLineHeight,
      color: textColor,
    };
  }, [textFontSize, textLineHeight, textColor]);

  return (
    <button className="buttonsecondary" style={buttonSecondaryStyle}>
      <div className="text" style={textStyle}>
        Login
      </div>
    </button>
  );
};

export default ButtonSecondary;
