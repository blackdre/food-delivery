import CalltoAction from "../components/shop-ui/CalltoAction";
import FeaturedProducts from "../components/shop-ui/FeaturedProducts";
import FeaturedRestaurants from "../components/shop-ui/FeaturedRestaurants";
import PopularItems from "../components/shop-ui/PopularItems";
import Specials from "../components/shop-ui/Specials";
import AppFeatures from "../components/ui/AppFeatures";
import Footer from "../components/ui/Footer";
import Hero from "../components/ui/Hero";
import HowItWorks from "../components/ui/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <PopularItems />
      <FeaturedRestaurants />
      <Specials />
      <AppFeatures />
      <CalltoAction />
    </>
  );
};
export default Home;
