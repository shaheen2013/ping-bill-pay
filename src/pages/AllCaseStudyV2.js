import MainHeader from '../components/MainHeader';
import SectionCard from '../components/SectionCard';
import ContainerCardForm from '../components/ContainerCardForm';
import Paginator from '../components/Paginator';
import CardSection1 from '../components/CardSection1';
import './AllCaseStudyV2.css';

const AllCaseStudyV2 = () => {
  return (
    <div className="all-case-study-v-2">
      <MainHeader />
      <SectionCard />
      <div className="frame-parent3">
        <div className="frame-parent4">
          <ContainerCardForm
            image="/image@2x.png"
            arrowUpRight="/arrowupright.svg"
            image1="/image1@2x.png"
            image2="/image2@2x.png"
          />
          <ContainerCardForm
            image="/image3@2x.png"
            arrowUpRight="/arrowupright1.svg"
            image1="/image3@2x.png"
            image2="/image3@2x.png"
            propBackgroundColor="#f9fbfd"
            propBorder="1px solid #e0e0e0"
            propColor="#2e3646"
          />
          <ContainerCardForm
            image="/image3@2x.png"
            arrowUpRight="/arrowupright1.svg"
            image1="/image3@2x.png"
            image2="/image3@2x.png"
            propBackgroundColor="#f9fbfd"
            propBorder="1px solid #e0e0e0"
            propColor="#2e3646"
          />
        </div>
        <Paginator />
      </div>
      <CardSection1
        dimensionCode="/group-403.svg"
        dimensionCodeText="/linkedin1.svg"
        propPosition="absolute"
        propFlexShrink="unset"
        propBottom="-0.37rem"
        propLeft="calc(50% - 960px)"
        propTop="unset"
      />
    </div>
  );
};

export default AllCaseStudyV2;
