import styles from "./Footer.module.css";

import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaPaypal,
  FaCcDiscover,
  FaEnvelopeOpen,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className=" flex justify-between bg-red-500 p-8 md:block item-center text-center">
        <div className="md:mb-3">
          <h1 className="text-white flex items-center justify-center text-2xl ">
            <span>
              <FaEnvelopeOpen className="text-white mr-3" />
            </span>
            Sign Up For Newsletter
          </h1>
        </div>

        <div className="flex">
          <input
            className={styles.inputsearch}
            placeholder="email@example.com"
            name="contact[email]"
            id="Email"
            // className="input-group-field"
            aria-label="email@example.com"
          />
          <button className={styles.btnsearch} type="button">
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex py-8 divide-x divide-light-blue-400 overflow-auto whitespace-nowrap ">
          <div className="flex flex-wrap md:justify-center items-center sm:text-center text-sm font-medium px-9">
            <img src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/01_60x.png?v=1553775260" />
            <div className="">
              <p>Free shipping</p>
              <p className="text-gray-500">Delivery to Door</p>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center items-center sm:text-center text-sm font-medium px-9">
            <img src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/02_60x.png?v=1553775260" />
            <div className="mx-3">
              <p>24*7 Support</p>
              <p className="text-gray-500">In Safe Hands</p>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center items-center sm:text-center text-sm font-medium px-9">
            <img src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/03_60x.png?v=1553775261" />
            <div className="mx-3">
              <p>Big Saving</p>
              <p className="text-gray-500">At Lowest Price</p>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center items-center sm:text-center text-sm font-medium px-9">
            <img src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/04_60x.png?v=1553775261" />
            <div className="mx-3">
              <p>Money Back</p>
              <p className="text-gray-500">Easy To Return</p>
            </div>
          </div>
          <div className="flex flex-wrap md:justify-center items-center sm:text-center text-sm font-medium px-9">
            <img src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/05_abaaf6fa-e8cf-43d9-a45a-272fe63adc20_60x.png?v=15538513760" />
            <div className="mx-3">
              <p>Exchange Offer</p>
              <p className="text-gray-500">Easy To Exchange</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-t-2 order-gray-600 mx-2 ">
        <div className="py-5 px-1 grid grid-cols-5 md:text-center md:grid-cols-1">
          <div className="p-2">
            <h1 className="text-3xl font-black">Big-Market.</h1>
            <p className="my-3 text-gray-400">
              Claritas processus dynamicus sequitu consution Claritas processus.
            </p>
            <div className="flex justify-center">
              <img
                className="mx-2"
                src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/hallmarks-checked_54x.png?v=1548658670"
              />
              <img
                className="mx-2"
                src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/hallmarks-pro_54x.png?v=1548658677"
              />
              <img
                className="mx-2"
                src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/hallmarks-qualified_54x.png?v=1548658689"
              />
            </div>
          </div>
          <div className="p-2">
            <h1>Products</h1>
            <ul className="my-3 text-gray-400">
              <li>Best Seller</li>
              <li>Featured Products</li>
              <li>Wishlist</li>
              <li>New Products</li>
              <li>Sale Product</li>
            </ul>
          </div>
          <div className="p-2">
            <h1>Our Company</h1>
            <ul className="my-3 text-gray-400">
              <li>Search</li>
              <li>Contact Us</li>
              <li>Delivery</li>
              <li>Catalog</li>
            </ul>
          </div>
          <div className="p-2">
            <h1>My Account</h1>
            <ul className="my-3 text-gray-400">
              <li>Wishlist</li>
              <li>Delivery</li>
              <li>Terms &amp; Conditions Of Use</li>
              <li>Legal Notice</li>
              <li>Upcoming</li>
            </ul>
          </div>
          <div className="p-2 ">
            <h1>Store Information</h1>
            <div className="my-3 text-gray-400  ">
              <div className="flex md:justify-center">
                <FaLocationArrow className="mt-1 mr-2 text-xl" />
                <p>My Company, 42 Puffin street 12345 Puffinville France</p>
              </div>
              <div className="flex md:justify-center ">
                <i className="fas fa-phone-alt mt-2 mr-2"></i>
                <FaPhoneAlt className="mt-1 mr-2 text-sm" />
                <p>0123-456-789</p>
              </div>
              <div className="flex md:justify-center">
                <MdEmail className="mt-2 mr-2" />
                <p>sales@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="p-5 flex justify-center text-2xl">
          <FaCcVisa className="mx-2" />
          <FaCcMastercard className="mx-2" />
          <FaCcAmex className="mx-2" />
          <FaPaypal className="mx-2" />
          <FaCcDiscover className="mx-2" />
        </div>
      </div>

      <div>
        <div className="p-2 bg-gray-200 flex justify-between  md:block md:text-center">
          <p>Copyright © 2021 theme-biggmarket | Powered by Code Knights</p>
          <ul className="flex md:justify-center mx-2">
            <li>
              <FaTwitter className="mx-2 text-xl" />
            </li>
            <li>
              <FaFacebook className="mx-2 text-xl" />
            </li>
            <li>
              <FaPinterest className="mx-2 text-xl" />
            </li>
            <li>
              <FaInstagram className="mx-2 text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
