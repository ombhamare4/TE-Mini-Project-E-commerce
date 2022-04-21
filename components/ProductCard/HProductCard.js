import Link from "next/link";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { useAuth } from "../../api/authentication";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../graphql/mutation";

const HProductCard = (props) => {
  const { isSignedIn, userID } = useAuth();

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

  const addProductHandler = (event) => {
    const productId = event.target.value;
    if (isSignedIn()) {
      addToCart({ variables: { productId: productId, userId: userID } });
    }
  };

  return (
    <div className="grid grid-cols-3 p-2 my-2 border border-t-2  xs:text-sm  md:text-md lg:text-lg hover:shadow-xl hover:rounded-lg transition-all duration-500 ease-in-out hover:scale-105 ">
      <Link href={`products/${props.id}`}>
        <div className="flex col-span-2">
          <div className="w-52 p-2 rounded-lg  flex items-center justify-center  overflow-hidden object-cover">
            <img
              className="w-96 bg-white  transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
              src={props.image}
            />
          </div>
          <div className=" p-2 mx-2 col-span-2">
            <h1 className="text-gray-800 mb-2 xs:truncate">{props.name}</h1>
            <div className="flex items-center mb-2">
              <FaStar className="rounded-full text-yellow-500" />
              <FaStar className="rounded-full text-yellow-500" />
              <FaStar className="rounded-full text-yellow-500" />
              <FaStar className="rounded-full text-yellow-500" />
              <FaRegStar className="rounded-full  text-yellow-500" />
            </div>
            <h1 className="text-gray-800 truncate  mb-2">
              Rs. {props.discountPrice}
            </h1>
          </div>
        </div>
      </Link>

      <div className="xs:hidden">
        <div className="flex">
          <button
            onClick={addProductHandler}
            value={props.id}
            className="bg-red-500 px-3 py-2 rounded-full mr-2 text-white"
          >
            + Add to Cart
          </button>
          <FaRegHeart className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
          <FaRegEye className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white" />
        </div>
      </div>
    </div>
  );
};

export default HProductCard;
