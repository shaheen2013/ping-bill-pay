import ShapeSquareStateDefault from './ShapeSquareStateDefault';
import './Paginator.css';

const Paginator = () => {
  return (
    <div className="pagination">
      <div className="button">
        <img className="arrow-left-icon" alt="" src="/arrowleft.svg" />
        <div className="text25">Previous</div>
        <img className="placeholder-icon" alt="" src="/placeholder.svg" />
      </div>
      <div className="pagination-numbers">
        <ShapeSquareStateDefault
          number="1"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="#41b79b"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#fff"
        />
        <ShapeSquareStateDefault
          number="2"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
        <ShapeSquareStateDefault
          number="3"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
        <ShapeSquareStateDefault
          number="..."
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
        <ShapeSquareStateDefault
          number="8"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
        <ShapeSquareStateDefault
          number="9"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
        <ShapeSquareStateDefault
          number="10"
          shapeSquareStateDefaultWidth="2.5rem"
          shapeSquareStateDefaultHeight="2.5rem"
          shapeSquareStateDefaultFlexShrink="0"
          shapeSquareStateDefaultBackgroundColor="unset"
          contentTop="0rem"
          contentLeft="0rem"
          contentWidth="2.5rem"
          contentHeight="2.5rem"
          contentPadding="0.75rem"
          numberFontSize="0.88rem"
          numberLineHeight="1.25rem"
          numberFontWeight="unset"
          numberFontFamily="Sora"
          numberColor="#475467"
        />
      </div>
      <div className="button">
        <img className="placeholder-icon" alt="" src="/placeholder.svg" />
        <div className="text25">Next</div>
        <img className="arrow-left-icon" alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default Paginator;
