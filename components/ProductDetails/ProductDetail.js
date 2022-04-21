import Head from "next/head";
import { FaRegStar, FaStar } from "react-icons/fa";
import CustomerReview from "../Reviews/CustomerReview";
import { currencyConverter } from "../../hooks/currencyConverter";
import { useAuth } from "../../api/authentication";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../graphql/mutation";
import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

const ProductDetail = (props) => {
  const text = props.productData.description;
  const formatedText = text.replace(/\r?\n|\r/g, " ");

  const { isSignedIn, userID } = useAuth();

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

  const addToCartHandler = (event) => {
    const productId = event.target.value;
    if (isSignedIn()) {
      addToCart({ variables: { productId: productId, userId: userID } });
    }
  };

  if (loading) return <NewLoading />;
  if (error) return <NewError />;

  return (
    <div>
      <Head>
        <title>{props.productData.name}</title>
        <meta name="description" content={props.productData.description} />
        <link rel="icon" href="/Jupiterfull.png" />
      </Head>

      <section className="text-gray-700 body-font  bg-white">
        <div className="p-16">
          <div className="grid grid-cols-2 md:grid-cols-1">
            <div className="flex justify-center">
              <div className="mr-5 p-2 rounded-lg  flex items-center justify-center  hover:overflow hover:z-10 ">
                <img
                  className="w-96  transition-all duration-500 ease-in-out transform bg-center bg-cover  hover:scale-150 "
                  src={props.productData.image}
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {props.productData.company}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 xs:text-xl">
                {props.productData.name}
              </h1>
              <div className="flex items-center mb-2">
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaStar className="rounded-full text-yellow-500" />
                <FaRegStar className="rounded-full  text-yellow-500" />
              </div>
              <p className="leading-relaxed mt-5 whitespace-pre-line">
                {formatedText}
              </p>
              <div className="flex justify-between xs:block xs:justify-center  mt-5">
                <span className="title-font font-medium text-2xl text-gray-900 xs:mt-5">
                  Rs. {currencyConverter(props.productData.price.discountPrice)}
                  <span className="text-sm  line-through mx-2">
                    Rs.
                    {currencyConverter(props.productData.price.originalPrice)}
                  </span>
                </span>
                <div className="flex  xs:mt-5">
                  <button
                    onClick={addToCartHandler}
                    value={props.productData._id}
                    className=" text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <CustomerReview reviews={props.productData.reviews} />
      </div>
    </div>
  );
};

export default ProductDetail;
