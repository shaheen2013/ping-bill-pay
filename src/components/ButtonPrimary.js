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
  action = null,
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
    <button className="buttonprimary cursor-pointer" style={buttonPrimaryStyle} onClick={action} >
      <div className="text1" style={text1Style}>
        {text}
      </div>
    </button>
  );
};

export default ButtonPrimary;
