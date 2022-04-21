import Link from "next/link";

import styles from "./VProduct.module.css";

import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

import { FaRegHeart, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import { useAuth } from "../../api/authentication";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "../../graphql/mutation";

const VProductCard = (props) => {
  const { isSignedIn, userID } = useAuth();

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

  const addProductHandler = (event) => {
    const productId = event.target.value;
    if (isSignedIn()) {
      addToCart({ variables: { productId: productId, userId: userID } });
    }
  };

  if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <div className="text-center p-2 mb-2 text-md relative hover:shadow-xl  hover:rounded-lg   transition-all duration-500 ease-in-out hover:scale-110">
      <Link href={`products/${props.id}`}>
        <div>
          <div className="rounded-lg  relative flex items-center justify-center overflow-hidden object-cover h-96 xs:h-24">
            <img
              className="bg-white xs:w-24 absolute  transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110"
              src={props.image}
            />
          </div>

          <h1 className="truncate px-5 text-gray-700 font-bold">
            {props.name}
          </h1>

          <p className="my-1">Rs.{props.discountPrice}</p>
          <p>
            Rs.<span className="my-1 line-through ">{props.originalPrice}</span>
          </p>

          <div className="flex justify-center  items-center">
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaStar className="text-xl  rounded-full text-yellow-500" />
            <FaRegStar className="text-xl  rounded-full  text-yellow-500" />
          </div>
        </div>
      </Link>

      <div className={styles.btn}>
        <button
          onClick={addProductHandler}
          className="bg-red-500 p-2 rounded-full mx-2 text-white md:hidden "
          value={props.id}
        >
          + Add to Cart
        </button>
        <button
          value={props.id}
          onClick={addProductHandler}
          className={styles.addCart}
        >
          +
        </button>
        <FaRegHeart className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white xs:hidden" />
        <FaRegEye className="mx-2 text-4xl bg-red-500  rounded-full  p-2 text-white xs:hidden" />
      </div>
    </div>
  );
};

export default VProductCard;
