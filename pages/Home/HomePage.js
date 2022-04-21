import Layout from "../../components/Layout/Layout";
import HomeCarousel from "../../components/Carsouel/HomeCarousel";
import HomeNewProductList from "../../components/ProductCard/HomeNewProductList";
import BestSellerList from "../../components/ProductCard/BestSellerList";
import DealOfTheDay from "../../components/ProductCard/DealOfTheDay";
import NewLoading from "../../components/Message/NewLoading";
const HomePage = () => {
  return (
    <div>
      <Layout>
        <div>
          <HomeCarousel />
        </div>
        <div className="mb-2">
          <HomeNewProductList />
        </div>
        <div className="mb-2 grid grid-cols-5 gap-3 lm:grid-cols-2 xs:grid-cols-1">
          <div className="col-span-4 lm:col-span-1 xs:col-span-1">
            <BestSellerList />
          </div>
          <div className="">
            <DealOfTheDay />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
