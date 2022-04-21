import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });
const HomeCarousel = () => {
  return (
    <div>
      <OwlCarousel
        className="owl-theme owl-loaded"
        loop
        dots={false}
        items={1}
        autoplay={true}
        autoplayTimeout={5000}
        animateOut="fadeOut"
      >
        <div className="item">
          <div className="absolute w-96 xs:w-52 inset-y-28 inset-x-36 lm:inset-x-10 lm:inset-y-20 md:inset-y-16 xs:inset-y-5">
            <h1 className=" text-4xl font-bold text-center xs:text-lg">
            Save 35% on all Gadeget
            </h1>
            <div className="flex justify-center items-center mt-5 xs:mt-2">
              <button className="bg-red-500 px-5 py-2 rounded-full text-white xs:text-sm">
                Shop Now
              </button>
            </div>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-02_e05e72fe-8a63-4a92-a257-856609c027ac.jpg?v=1566189060"
            className="w-full"
          />
        </div>
        <div className="item">
          <div className="absolute w-96 xs:w-52 inset-y-28 inset-x-36 lm:inset-x-10 lm:inset-y-20 md:inset-y-16 xs:inset-y-5">
            <h1 className=" text-4xl font-bold text-center xs:text-lg">
              Google Home Bluthooth Speaker
            </h1>
            <div className="flex justify-center items-center mt-5 xs:mt-2">
              <button className="bg-red-500 px-5 py-2 rounded-full text-white xs:text-sm">
                Shop Now
              </button>
            </div>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-02_e05e72fe-8a63-4a92-a257-856609c027ac.jpg?v=1566189060"
            className="w-full"
          />
        </div>

        <div className="item">
          <div className="absolute w-96 xs:w-52 inset-y-28 inset-x-36 lm:inset-x-10 lm:inset-y-20 md:inset-y-16 xs:inset-y-5">
            <h1 className=" text-4xl font-bold text-center xs:text-lg">
              Google Products
            </h1>
            <div className="flex justify-center items-center mt-5 xs:mt-2">
              <button className="bg-red-500 px-5 py-2 rounded-full text-white xs:text-sm">
                Shop Now
              </button>
            </div>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-01_cdca6597-97a6-45ef-ae6b-264bcd98c1ed.jpg?v=1566189048"
            className="w-full"
          />
        </div>
      </OwlCarousel>

    </div>
  );
};

export default HomeCarousel;
