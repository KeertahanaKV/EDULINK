import Navbar from "./Navbar/Navbar";
import HeroSection from "./Herosection";
import FeaturedResources from "./Featured";
import KeyFeatures from "./KeyFeatures";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Link to="/">
      <Navbar />
      <HeroSection />
      <FeaturedResources />
      <KeyFeatures />
      <FAQ />
      </Link>
    </>
  );
}
