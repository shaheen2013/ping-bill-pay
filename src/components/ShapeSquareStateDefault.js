import { useMemo } from "react";
import "./ShapeSquareStateDefault.css";
const ShapeSquareStateDefault = ({
  number,
  shapeSquareStateDefaultWidth,
  shapeSquareStateDefaultHeight,
  shapeSquareStateDefaultFlexShrink,
  shapeSquareStateDefaultBackgroundColor,
  contentTop,
  contentLeft,
  contentWidth,
  contentHeight,
  contentPadding,
  numberFontSize,
  numberLineHeight,
  numberFontWeight,
  numberFontFamily,
  numberColor,
}) => {
  const shapeSquareStateDefaultStyle = useMemo(() => {
    return {
      width: shapeSquareStateDefaultWidth,
      height: shapeSquareStateDefaultHeight,
      flexShrink: shapeSquareStateDefaultFlexShrink,
      backgroundColor: shapeSquareStateDefaultBackgroundColor,
    };
  }, [
    shapeSquareStateDefaultWidth,
    shapeSquareStateDefaultHeight,
    shapeSquareStateDefaultFlexShrink,
    shapeSquareStateDefaultBackgroundColor,
  ]);

  const contentStyle = useMemo(() => {
    return {
      top: contentTop,
      left: contentLeft,
      width: contentWidth,
      height: contentHeight,
      padding: contentPadding,
    };
  }, [contentTop, contentLeft, contentWidth, contentHeight, contentPadding]);

  const numberStyle = useMemo(() => {
    return {
      fontSize: numberFontSize,
      lineHeight: numberLineHeight,
      fontWeight: numberFontWeight,
      fontFamily: numberFontFamily,
      color: numberColor,
    };
  }, [
    numberFontSize,
    numberLineHeight,
    numberFontWeight,
    numberFontFamily,
    numberColor,
  ]);

  return (
    <div
      className="shapesquare-statedefault"
      style={shapeSquareStateDefaultStyle}
    >
      <div className="content" style={contentStyle}>
        <div className="number" style={numberStyle}>
          {number}
        </div>
      </div>
    </div>
  );
};

export default ShapeSquareStateDefault;
