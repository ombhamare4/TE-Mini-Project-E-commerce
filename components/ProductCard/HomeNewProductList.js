import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import NewProductCard from "./NewProductCard";
import { GET_PRODUCTS } from "../../graphql/query";
import { useQuery } from "@apollo/client";

import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

const HomeNewProductList = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <NewLoading />;
  if (error) return <NewError />;

  const options = {
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  const heightnew = "h-56  lm:h-96 xs:h-40";
  const imageheight = "xs:h-40";
  return (
    <div className="bg-white p-2 rounded-lg border-2 border-red-500">
      <div className="flex">
        <h1 className="text-xl text-white font-bold bg-red-500 p-2 rounded-r-full">
          New Products
        </h1>
      </div>
      <OwlCarousel className="owl-theme owl-loaded" {...options}>
        {data.products
          .slice(0)
          .reverse()
          .slice(0, 8)
          .map((product) => (
            <div key={product._id} className="item">
              <NewProductCard
                height={heightnew}
                imgheight={imageheight}
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price.discountPrice}
              />
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
};
export default HomeNewProductList;
