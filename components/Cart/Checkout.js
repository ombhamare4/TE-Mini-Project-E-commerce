import Link from "next/link";
import {currencyConverter} from "../../hooks/currencyConverter"

const Checkout = (props) => {
  return (
    <div className="p-2">
      <h1 className="text-2xl mb-2">Total:</h1>
      <h1 className="text-4xl mb-2">Rs. {currencyConverter(props.sumDiscount)}</h1>
      <h1 className="text-md mb-2 text-gray-500">Rs. {currencyConverter(props.sumOriginal)}</h1>
      <h1 className="text-md mb-2 text-gray-500">
        {props.TotalDiscount.toFixed(2)}% off
      </h1>
      <Link href="/checkout">
        <div className="cursor-pointer bg-red-500 p-3 text-xl text-center  relative hover:shadow-xl  transition-all duration-500 ease-in-out hover:scale-110">
          <h1 className="text-white">Checkout</h1>
        </div>
      </Link>
    </div>
  );
};

export default Checkout;
