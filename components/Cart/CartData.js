import ShoppingProductCard from "./ShoppingProductCard";
import Checkout from "./Checkout";
import { useEffect, useState } from "react";
import { useAuth } from "../../api/authentication";
import NoAuth from "../Error/NoAuth";
import Link from "next/link";
import BestSellerList from "../ProductCard/BestSellerList"
const CartData = (props) => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [productId, setProductId] = useState(null);
  const { isSignedIn, userID } = useAuth();

  let sumDiscount = 0;
  let sumOriginal = 0;
  props.cartData.map((product) => {
    sumDiscount = sumDiscount + parseInt(product.product.price.discountPrice);
    sumOriginal = sumOriginal + parseInt(product.product.price.originalPrice);
  });
  const TotalDiscount = 100 - (sumDiscount * 100) / sumOriginal;

  useEffect(() => {
    if (props.cartData.length === 0) {
      setIsCartEmpty(true);
    }
  });

  return (
    <div className="bg-white p-5">
      {!isSignedIn() && <NoAuth />}
      {isSignedIn() && (
        <div>
          <div className="p-2">
            <h1 className="text-5xl font-bold text-gray-700 xs:text-2xl">Shopping Cart</h1>
          </div>
          {isCartEmpty && (
            <div className="p-5 text-2xl">
              <Link href="/collections">
                <p className="transition-all duration-300 hover:text-red-500  cursor-pointer">
                  Want add product?
                </p>
              </Link>
            </div>
          )}

          {!isCartEmpty && (
            <div className="grid grid-cols-4 gap-8 mt-4 md:grid-cols-1 md:item-center">
              <section className="col-span-3 md:col-span-1">
                <div>
                  {/* <h1 className="mb-5">3 Courses in Cart</h1> */}
                  <div>
                    <ul>
                      {props.cartData.map((product) => (
                        <li key={product.product._id}>
                          <ShoppingProductCard
                            id={product.product._id}
                            name={product.product.name}
                            price={product.product.price.discountPrice}
                            image={product.product.image}
                            setProductId={setProductId}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <Checkout
                  sumDiscount={sumDiscount}
                  sumOriginal={sumOriginal}
                  TotalDiscount={TotalDiscount}
                />
              </section>
            </div>
          )}
        </div>
      )}
      <BestSellerList/>
    </div>
  );
};

export default CartData;
