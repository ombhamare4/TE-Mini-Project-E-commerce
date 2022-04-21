import { useState } from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import ProductList from "../ProductsTest/ProductList";

import { CgMenuGridR, CgLayoutList } from "react-icons/cg";


const priceOptions = [
  {
    text: "Rs.1000~Rs.10000",
    value: 1,
  },
  {
    text: "Rs.10000~Rs.25000",
    value: 2,
  },
  {
    text: "Rs.2500~Rs.50000",
    value: 3,
  },
  {
    text: "Rs.50000",
    value: 4,
  },
];

const sortingOptions = [
  {
    id: 1,
    text: "Featured",
    value: "1",
  },
  {
    id: 2,
    text: "Price, Low to High",
    value: "2",
  },
  {
    id: 3,
    text: "Price, High to Low",
    value: "3",
  },
  {
    id: 4,
    text: "Alphabetically, A-Z",
    value: "4",
  },
  {
    id: 5,
    text: "Alphabetically, Z-A",
    value: "5",
  },
  {
    id: 6,
    text: "Date, old to new",
    value: "6",
  },
  {
    id: 7,
    text: "Date, new to old",
    value: "7",
  },
  {
    id: 8,
    text: "Best Selling",
    value: "8",
  },
];

const AllCollectionsDetails = (props) => {

  const [changeView, setChangedView] = useState(true);

  const gridViewHandler = () => {
    setChangedView(true);
  };

  const listViewHandler = () => {
    setChangedView(false);
  };



  return (
    <div className="bg-white shadow-2xl ">
      <div className="bg-gray-300 p-3">
        <h1 className="text-2xl">Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 p-5 lg:block">
        <div className="lg:hidden">
          <div className="shadow-xl rounded-md border border-red-400 p-1">
            <h1 className="p-2 bg-red-500 text-white rounded-md mb-1">
              Shop By Price
            </h1>

            <div className="p-2">
              {priceOptions.map((price) => (
                <div className="mb-1" key={price.value}>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={price.value}
                    />{" "}
                    {price.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="shadow-xl rounded-md border border-red-400 p-1 mt-4">
            <h1 className="p-2 bg-red-500 text-white rounded-md mb-1">
              Shop By Collections
            </h1>
            <div className="p-2">
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> CPU
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> RAM
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> HDD
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Graphics Card
                </label>
              </div>
              <div>
                <h1 className="text-right text-red-500">More</h1>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-md border border-red-400 p-1 mt-4">
            <img
              className="relative"
              src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/right-banner_16edbb4f-87b7-4602-a5ca-fea9c0ff5c4b_320x.jpg?v=1556857605"
            />
          </div>
        </div>
        <div className="col-span-3">
          <div >
            <h1 className="text-xl p-2 hidden xs:block">Products</h1>
            <div className="p-2 border border-red-500 rounded-md flex justify-between items-center xs:hidden">
              <div className="flex xs:justify-center xs:pb-2">
                <button onClick={gridViewHandler}>
                  <CgMenuGridR className="border border-gray-500 rounded-md text-4xl p-1 mx-2 xs:text-md" />
                </button>
                <button onClick={listViewHandler}>
                  <CgLayoutList className="border border-gray-500 rounded-md text-4xl p-1 mx-2" />
                </button>
              </div>
              <div className="flex  xs:justify-center">
                <h1 className="mx-2">Sort By:</h1>
                <select
                  className="border border-red-500 rounded-sm hover:border-red-500"
                >
                  {sortingOptions.map((val) => (
                    <option
                      value={val.value}
                      className="hover:bg-red-400"
                      key={val.id}
                    >
                      {val.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <ProductList products={props.productsData} changeView={changeView} />
{/*
          <div className="py-10 flex justify-center">
            <ReactPaginate
              className="flex"
              previousLabel={"<"}
              breakLabel={"..."}
              nextLabel={">"}
              pageCount={15}
              marginPagesDisplayed={4}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={`flex justify-center items-center`}
              pageClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              previousClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              nextClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              breakClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              activeClassName={"bg-red-500 text-white"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllCollectionsDetails;
