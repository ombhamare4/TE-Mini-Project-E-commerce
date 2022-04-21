import Link from "next/link";
import { useState } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiExit } from "react-icons/bi";
import { useRouter } from "next/router";
import styles from "./Header.module.css";
import { useAuth } from "../../api/authentication";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const { isSignedIn, signOut, userID } = useAuth();
  const router = useRouter();
  const changeToggle = () => {
    if (!isToggle) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

  const logOutHandler = () => {
    signOut();
    if (!isSignedIn()) {
      router.push(`/`);
    }
  };

  return (
    <div className="bg-white transition-all duration-500 hover:shadow-2xl cursor-pointer">
      <div className={styles.headers}>
        <div className="p-3 grid grid-cols-4 items-center md:grid-cols-1 lm:grid-cols-3 xs:p-0 ">
          <div className="flex justify-center items-center md:justify-between md:mb-2">
            <Link href="/">
              <h1 className="text-4xl font-bold xs:text-2xl">
                <span className="text-red-500">J</span>upiter
                <span className="text-red-500">.</span>
                <span>com</span>
              </h1>
            </Link>
            <div className="hidden md:block xs:text-sm">
              <div className="">
                {!isSignedIn() && (
                  <Link href="/account">
                    <div>
                      <div className={styles.btn1}>
                        <div className="flex justify-center items-center cursor-pointer">
                          <FaUserAlt />
                          <span className="mx-2 xs:text-sm xs:mx-0">
                            Sign In
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
                {isSignedIn() && (
                  <div className="flex">
                    <Link href={`/cart/${userID}`}>
                      <div className={styles.btn1}>
                        <div className="flex justify-center items-center cursor-pointer">
                          <FaShoppingCart />
                          <span className="mx-2 xs:text-sm xs:mx-0">Cart</span>
                        </div>
                      </div>
                    </Link>
                    <div className={styles.btn1}>
                      <button
                        className="flex justify-center items-center cursor-pointer"
                        onClick={logOutHandler}
                      >
                        <BiExit />
                        <span className="mx-2 xs:text-sm xs:mx-0">Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex col-span-2 lm:col-span-1">
            <input
              type="text"
              className={styles.inputsearch}
              placeholder="Search Product here"
            />
            <button className={styles.btnsearch} type="button">
              Search
            </button>
          </div>
          <div className="flex justify-center text-xl md:hidden">
            {!isSignedIn() && (
              <Link href="/account">
                <div className={styles.btn1}>
                  <div className="flex justify-center items-center cursor-pointer">
                    <FaUserAlt />
                    <span className="mx-2">Sign In</span>
                  </div>
                </div>
              </Link>
            )}
            {isSignedIn() && (
              <div className="flex">
                <Link href={`/cart/${userID}`}>
                  <div className={styles.btn1}>
                    <div className="flex justify-center items-center cursor-pointer">
                      <FaShoppingCart />
                      <span className="mx-2">Cart</span>
                    </div>
                  </div>
                </Link>
                <div className={styles.btn1}>
                  <button
                    className="flex justify-center items-center cursor-pointer"
                    onClick={logOutHandler}
                  >
                    <BiExit />
                    <span className="mx-2">Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex justify-evenly items-center mt-2">
            <Link href="/">
              <div className={styles.btn1}>Home</div>
            </Link>
            <Link href="/catlog">
              <div className={styles.btn1 + " " + styles.dropdown}>Catlog</div>
            </Link>
            <Link href="/collections">
              <div className={styles.btn1}>All Collection</div>
            </Link>
            <Link href="/customcomputer">
              <div className={styles.btn1}>Custom Computer</div>
            </Link>
          </div>
        </div>
        <div className=" md:px-3 xs:px-0 mt-2">
          <div className="hidden md:block">
            <div className="bg-red-500  p-2 rounded text-white sm:text-xs">
              <h1 className="flex">
                <button
                  onClick={changeToggle}
                  className="flex justify-center items-center mx-2 font-black"
                >
                  <HiOutlineMenuAlt1 />
                </button>
                Menu
              </h1>
            </div>

            {/* responsive dropdown */}
            {isToggle && (
              <div>
                <div className="">
                  <Link href="/">
                    <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                      Home
                    </div>
                  </Link>
                  <Link href="/catlog">
                    <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                      Catlog
                    </div>
                  </Link>
                  <Link href="/collections">
                    <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                      All Collection
                    </div>
                  </Link>
                  <Link href="/customcomputer">
                    <div className="text-center p-2 transition-all duration-200 hover:text-white hover:bg-red-500">
                      Custom Computer
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
