import { useMemo } from 'react';
import './QuoteCard.css';

const QuoteCard = ({
  dimensionLabel,
  dimensionCode,
  dimensionValue,
  dimensionDescription,
  dimensionText,
  customerReviewText,
  propColor,
}) => {
  const quoteStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="quote-and-stars">
      <div className="stars1">
        <img className="star-icon5" alt="" src={dimensionLabel} />
        <img className="star-icon5" alt="" src={dimensionCode} />
        <img className="star-icon5" alt="" src={dimensionValue} />
        <img className="star-icon5" alt="" src={dimensionDescription} />
        <img className="star-icon5" alt="" src={dimensionText} />
      </div>
      <b className="quote" style={quoteStyle}>
        {customerReviewText}
      </b>
    </div>
  );
};

export default QuoteCard;
