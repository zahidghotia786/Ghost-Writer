import Book from "./Book";
import CallToAction from "./CallToAction";
import ChooseUs from "./ChooseUs";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
// import Newsletter from "./Newsletter";
import Price from "./Price";
import Process from "./Process";
import Record from "./Record";
import Services from "./Services";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Record />
      <Book />
      <Services />
      <Process />
      <ChooseUs />
      <FAQ />
      <Testimonial />
      <Price />
      {/* <Newsletter /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}
