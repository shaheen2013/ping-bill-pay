import { useMemo } from 'react';
import './ContainerCardForm.css';
import { Link } from 'react-router-dom';

const ContainerCardForm = ({ image, arrowUpRight, image1, image2 }) => {
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
        <Link className="buttonprimary" to={'/case-study-version-2-the-vape-store'}>
          <div className="text22">Read More</div>
          <img className="arrow-up-right-icon" alt="" src="/arrowupright1.svg" />
        </Link>
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
        <Link to={'/case-study-version-2-swift-gas-stations'} className="buttonprimary">
          <div className="text22">Read More</div>
          <img className="arrow-up-right-icon" alt="" src="/arrowupright1.svg" />
        </Link>
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
        <Link to={'/case-study-version-2-aaa-wireless-store'} className="buttonprimary">
          <div className="text22">Read More</div>
          <img className="arrow-up-right-icon" alt="" src="/arrowupright1.svg" />
        </Link>
      </div>
    </div>
  );
};

export default ContainerCardForm;
