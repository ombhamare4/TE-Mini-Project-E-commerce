import { currencyConverter } from "../../hooks/currencyConverter";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import { MdAdd } from "react-icons/md";
import { ADD_TO_CART } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../api/authentication";
import NewLoading from "../Message/NewLoading";
import NewError from "../Message/NewError";

const NewProductCard = (props) => {
  const { isSignedIn, userID } = useAuth();

  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

  const addProductHandler = (event) => {
    const productId = event.target.value;
    console.log(props.id);
    // console.log(event.target.value);
    if (isSignedIn()) {
      addToCart({ variables: { productId: props.id, userId: userID } });
    }
  };

  // if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <div className="p-3 mx-2 transition-all duration-300 hover:scale-110 z-20 cursor-pointer">
      {loading && <NewLoading />}
      <Link href={`products/${props.id}`}>
        <div
          className={`rounded-lg  relative flex items-center justify-center overflow-hidden object-cover ${props.height}`}
        >
          <img
            src={props.image}
            className={`${props.imgheight} bg-white absolute  transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-110`}
          />
        </div>
      </Link>
      <div className="flex justify-center my-2">
        <button onClick={addProductHandler} value={props.id}>
          <MdAdd className="text-4xl bg-red-500  rounded-full text-white mx-2" />
        </button>
        <FaRegHeart className=" text-4xl bg-red-500  rounded-full  p-2 text-white mx-2 xs:hidden" />
        <FaRegEye className="text-4xl bg-red-500  rounded-full  p-2 text-white mx-2 xs:hidden" />
      </div>
      <div className="flex justify-center mb-2">
        <h1 className="px-5 truncate text-gray-700">{props.name}</h1>
      </div>
      <div className="flex justify-center mb-2">
        <h1>Rs. {currencyConverter(props.price)}</h1>
      </div>
    </div>
  );
};

export default NewProductCard;
