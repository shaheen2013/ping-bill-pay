import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import AllCaseStudyV2 from './pages/AllCaseStudyV2';
import CaseStudyVersion2AAAWire from './pages/CaseStudyVersion2AAAWire';
import CaseStudyVersion2SwiftGa from './pages/CaseStudyVersion2SwiftGa';
import CaseStudyVersion2TheVape from './pages/CaseStudyVersion2TheVape';
import ContactUsPage from './pages/ContactUsPage';
import DMCA from './pages/DMCA';
import LandingPageProductFeature from './pages/LandingPageProductFeature';
import LandingPageV5state2 from './pages/LandingPageV5state2';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refund from './pages/Refund';
import TremsCondition from './pages/TremsCondition';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = 'Ping Bill Pay';
        metaDescription = 'Ping Bill Pay';
        break;
      case '/dmca':
        title = '';
        metaDescription = '';
        break;
      case '/privacy-policy':
        title = '';
        metaDescription = '';
        break;
      case '/refund':
        title = '';
        metaDescription = '';
        break;
      case '/trems-condition':
        title = '';
        metaDescription = '';
        break;
      case '/all-case-study-v2':
        title = '';
        metaDescription = '';
        break;
      case '/landing-page-product-features-menu-popup':
        title = '';
        metaDescription = '';
        break;
      case '/case-study-version-2-the-vape-store':
        title = '';
        metaDescription = '';
        break;
      case '/case-study-version-2-swift-gas-stations':
        title = '';
        metaDescription = '';
        break;
      case '/case-study-version-2-aaa-wireless-store':
        title = '';
        metaDescription = '';
        break;
      case '/about-us-page':
        title = '';
        metaDescription = '';
        break;
      case '/contact-us-page':
        title = '';
        metaDescription = '';
        break;
      default:
        title = 'Ping Bill Pay';
        metaDescription = 'Ping Bill Pay';
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPageV5state2 />} />
      <Route path="/dmca" element={<DMCA />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund" element={<Refund />} />
      <Route path="/trems-condition" element={<TremsCondition />} />
      <Route path="/all-case-study-v2" element={<AllCaseStudyV2 />} />
      <Route path="/landing-page-product-features-menu-popup" element={<LandingPageProductFeature />} />
      <Route path="/case-study-version-2-the-vape-store" element={<CaseStudyVersion2TheVape />} />
      <Route path="/case-study-version-2-swift-gas-stations" element={<CaseStudyVersion2SwiftGa />} />
      <Route path="/case-study-version-2-aaa-wireless-store" element={<CaseStudyVersion2AAAWire />} />
      <Route path="/about-us-page" element={<AboutUsPage />} />
      <Route path="/contact-us-page" element={<ContactUsPage />} />
    </Routes>
  );
}
export default App;
