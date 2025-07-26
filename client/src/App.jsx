import ImageSlider from "./components/Sections/ImageSlider";
import Mailer from "./components/Sections/Mailer";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Headlines from './components/Headlines';
import Comparison from './components/Comparison';
// import PopupSection from './components/Popupsection';
import Footer from './components/footer';
import VideoFeatureSection from './components/VideoFeatureSection';
import VideoFeatureSectionNew from './components/VideoFeatureSectionNew';
import BottleSection from './components/Sections/Bottles'
import FooterTop from "./components/footerTop";


export default function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <VideoFeatureSection />
      <VideoFeatureSectionNew />
      <Headlines />
      <Comparison />
      {/* <PopupSection /> */}
      <ImageSlider />
      <Mailer />
      <BottleSection />
      <FooterTop />
      <Footer />
    </div>
  
  )
}
