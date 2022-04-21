import { useQuery } from "@apollo/client";
import { PROUDUT_BY_NAME } from "../../../graphql/query";
import NewLoading from "../../Message/NewLoading";
import NewError from "../../Message/NewError";
import { useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import NewProductCard from "../../ProductCard/NewProductCard";

const CustomGraphicCard= (props) => {
  const [isempty, setIsEmpty] = useState(true);
  const { data, loading, error } = useQuery(PROUDUT_BY_NAME, {
    variables: { productName: props.graphiccard, collectionName: "Graphic Card" },
  });

  if (loading) return <NewLoading />;
  if (error) return <NewError />;

  // if (data.productByName.length == 0) {
  //   setIsEmpty(false);
  // }

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
    <div className="bg-white  rounded-lg border-2 border-red-500 mt-2">
      <div className="flex">
        <h1 className="text-xl text-white font-bold bg-red-500 p-2 rounded-r-full">
          Graphic Card
        </h1>
      </div>
      {!isempty && (
        <div>
          <h1>No data available</h1>
        </div>
      )}

      {isempty && (
        <div>
          <OwlCarousel className="owl-theme owl-loaded" {...options}>
            {data.productByName.map((product) => (
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
      )}
    </div>
  );
};

export default CustomGraphicCard;
