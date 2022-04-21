import ProductVerticlItem from "./ProductVerticlItem";
import ProductHorizontalItem from "./ProductHorizontalItem";
import { useEffect, useState } from "react";

const ProductList = (props) => {

  return (
    <div>
      {props.changeView && (
        <ul className="grid grid-cols-3 md:grid-cols-2 ">
          {props.products.map((products) => (
            <li key={products._id}>
              <ProductVerticlItem
                id={products._id}
                name={products.name}
                originalPrice = {products.price.originalPrice}
                discountPrice = {products.price.discountPrice}
                category={products.category}
                image={products.image}
              />
            </li>
          ))}
        </ul>
      )}
      {!props.changeView && (
        <ul className="">
          {props.products.map((products) => (
            <li key={products._id}>
              <ProductHorizontalItem
                  id={products._id}
                  name={products.name}
                  originalPrice = {products.price.originalPrice}
                  discountPrice = {products.price.discountPrice}
                  category={products.category}
                  image={products.image}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

// const SortByPrice = (SortSelectedPriceValue) => {
// if (SortSelectedPriceValue === 0) {
//   setNewProducts(newproducts);
// }

// if (SortSelectedPriceValue === 1) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) >= 1000 && parseInt(el.price) <= 10000;
//   });
// }
// else if (SortSelectedPriceValue === 2) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 10000 && parseInt(el.price) <= 25000;
//   });
// } else if (SortSelectedPriceValue === 3) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 25000 && parseInt(el.price) <= 50000;
//   });
// } else if (SortSelectedPriceValue === 4) {
//   var newproducts = AllProducts.filter(function (el) {
//     return parseInt(el.price) > 50000;
//   });
// }

// setNewProducts(newproducts);
// };

// const collectionname = props.collectionname.replaceAll(" ", "").toLowerCase();
// console.log(collectionname);

// const newproducts = props.products.filter(function (products) {
//   if (
//     products.category.replaceAll(" ", "").toLowerCase() === collectionname
//   ) {
//     return products;
//   } else if (collectionname === "all") {
//     return products;
//   }
// });

// console.log(props.priceSort);
// console.log(props.sortSelected);

// console.log(props.changeView);
