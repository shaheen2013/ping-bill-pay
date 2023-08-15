import { useMemo } from 'react';
import './ContainerCardForm.css';

const ContainerCardForm = ({ image, arrowUpRight, image1, image2, propBackgroundColor, propBorder, propColor }) => {
  const buttonPrimary1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const text4Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="blog-post-card-parent">
      <div className="blog-post-card">
        <img className="image-icon" alt="" src={image} />
        <div className="heading-and-subheading">
          <div className="heading-and-subheading">
            <div className="heading-and-text">
              <div className="heading-and-icon">
                <div className="heading35">The Vape Store's Evolution</div>
                <div />
              </div>
              <div className="supporting-text7">
                Leveraging Mobile Top-Ups, Bill Payments, and Activations to Drive Sales and Cross-Selling Opportunities
              </div>
            </div>
          </div>
        </div>
        <div className="buttonprimary1" style={buttonPrimary1Style}>
          <div className="text22" style={text4Style}>
            Read More
          </div>
          <img className="arrow-up-right-icon" alt="" src={arrowUpRight} />
        </div>
      </div>
      <div className="blog-post-card">
        <img className="image-icon" alt="" src={image1} />
        <div className="heading-and-subheading">
          <div className="heading-and-subheading">
            <div className="heading-and-text">
              <div className="heading-and-icon">
                <div className="heading35">The Vape Store's Evolution</div>
                <div />
              </div>
              <div className="supporting-text7">
                Leveraging Mobile Top-Ups, Bill Payments, and Activations to Drive Sales and Cross-Selling Opportunities
              </div>
            </div>
          </div>
        </div>
        <div className="buttonprimary2">
          <div className="text22">Read More</div>
          <img className="arrow-up-right-icon" alt="" src="/arrowupright1.svg" />
        </div>
      </div>
      <div className="blog-post-card">
        <img className="image-icon" alt="" src={image2} />
        <div className="heading-and-subheading">
          <div className="heading-and-subheading">
            <div className="heading-and-text">
              <div className="heading-and-icon">
                <div className="heading35">The Vape Store's Evolution</div>
                <div />
              </div>
              <div className="supporting-text7">
                Leveraging Mobile Top-Ups, Bill Payments, and Activations to Drive Sales and Cross-Selling Opportunities
              </div>
            </div>
          </div>
        </div>
        <div className="buttonprimary2">
          <div className="text22">Read More</div>
          <img className="arrow-up-right-icon" alt="" src="/arrowupright1.svg" />
        </div>
      </div>
    </div>
  );
};

export default ContainerCardForm;
