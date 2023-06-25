import Image from "next/image";
import Banner from "./components/Banner";
import CarouselCard from "./components/CarouselCard";
import Slider from "./components/Slider";
import Special from "./components/Special";
import FoodMenu from "./components/FoodMenu";
import DeliverySection from "./components/DeliverySection";
import TestimonialsSection from "./components/TestimonialsSection";
import OfferBanner from "./components/OfferBanner";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <Slider />
      <Special />
      <FoodMenu />
      <DeliverySection />
      <TestimonialsSection />
      <OfferBanner />
      <BlogSection />
    </main>
  );
}
