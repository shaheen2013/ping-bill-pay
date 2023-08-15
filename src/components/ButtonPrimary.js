import { useMemo } from 'react';
import './ButtonPrimary.css';

const ButtonPrimary = ({
  text,
  buttonPrimaryPosition,
  buttonPrimaryBackgroundColor,
  buttonPrimaryPadding,
  buttonPrimaryWidth,
  textFontSize,
  textLineHeight,
}) => {
  const buttonPrimaryStyle = useMemo(() => {
    return {
      position: buttonPrimaryPosition,
      backgroundColor: buttonPrimaryBackgroundColor,
      padding: buttonPrimaryPadding,
      width: buttonPrimaryWidth,
    };
  }, [buttonPrimaryPosition, buttonPrimaryBackgroundColor, buttonPrimaryPadding, buttonPrimaryWidth]);

  const text1Style = useMemo(() => {
    return {
      fontSize: textFontSize,
      lineHeight: textLineHeight,
    };
  }, [textFontSize, textLineHeight]);

  return (
    <div className="buttonprimary" style={buttonPrimaryStyle}>
      <div className="text1" style={text1Style}>
        {text}
      </div>
    </div>
  );
};

export default ButtonPrimary;
