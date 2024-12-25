import HeroSection from "./components/heroSection";
import Feature_product from "./components/feature_product";
import Latest_product from "./components/latest_product";
import ShopexOffer from "./components/shopexOffer";
import UniqueProduct from "./components/uniqeProduct";
import TrendingProduct from "./components/trendingProduct";
import Discountproduct from "./components/discountproduct";
import Topcatgory from "./components/topcatgory";
import Bg_pgoto from "./components/bg-pgoto";
import Latestblog from "./components/latestblog";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <Feature_product/>
    <Latest_product/>
    <ShopexOffer/>
    <UniqueProduct/>
    <TrendingProduct/>
    <Discountproduct/>
    <Topcatgory/>
    <Bg_pgoto/>
    <Latestblog/>
    
    </>
  );
}
